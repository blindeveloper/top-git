import React, { useEffect, useState, useRef } from 'react';
import { getCacheByKey, setCacheValue } from '../services/localStorageManager';
import useOnScreenHook from '../useOnScreenHook';
import { useDebounce } from 'use-debounce';
import RepositoriesList from './repositoriesList/RepositoriesList';
import {
  getSubtractedDate,
  convertHeavyRepoToLightRepo,
} from '../services/utils';
import Header from './header/Header';
import { StyledContainer } from './StyledGlobal';
import { getGithubRepositories } from '../services/resources';

const ListWithFavorites = ({ setIsShowProgressBar, setError }) => {
  const [repositories, setRepositories] = useState([]);
  const [favoritesRepositories, setFavoritesRepositories] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [isFavoritesOn, setIsFavoritesOn] = useState(false);
  const [filterInputValue, setFilterInputValue] = useState('');
  const [totalReposCount, setTotalReposCount] = useState(0);
  const ref = useRef(null);
  const endOfScreen = useOnScreenHook(ref);
  const [debouncedFilterInput] = useDebounce(filterInputValue, 500);

  useEffect(() => {
    const favorites = getCacheByKey('favorites');
    if (favorites) {
      setFavoritesRepositories(favorites);
    }
  }, []);

  const isTimeToLoadNewRepos = () => {
    return endOfScreen && !isFavoritesOn && !debouncedFilterInput;
  };

  useEffect(() => {
    if (isTimeToLoadNewRepos()) {
      fetchRepositories();
      setPageCount(pageCount + 1);
    }
  }, [endOfScreen]);

  const addRepositories = (repos) => {
    if (!repositories.length) {
      setRepositories(repos);
    } else {
      setRepositories([...repositories, ...repos]);
    }
  };

  const getCachedRequest = (subtractedDate) => {
    return getCacheByKey(`${subtractedDate}_${pageCount}`);
  };

  const fetchRepositories = async () => {
    setIsShowProgressBar(true);
    const subtractedDate = getSubtractedDate(new Date(), 7);
    let repos;
    const cachedRequest = getCachedRequest(subtractedDate);

    if (cachedRequest) {
      repos = cachedRequest;
    } else {
      repos = await getGithubRepositories(subtractedDate, pageCount, setError);
    }

    if (repos) {
      setIsShowProgressBar(false);
      addRepositories(repos.items);
      setTotalReposCount(repos.total_count);
      setCacheValue(`${subtractedDate}_${pageCount}`, {
        items: repos.items.map((repo) => convertHeavyRepoToLightRepo(repo)),
        total_count: repos.total_count,
      });
    }
  };

  return (
    <>
      <Header
        setIsFavoritesOn={setIsFavoritesOn}
        isFavoritesOn={isFavoritesOn}
        favoritesRepositories={favoritesRepositories}
        setFilterInputValue={setFilterInputValue}
        totalReposCount={totalReposCount}
      />
      <StyledContainer>
        <RepositoriesList
          repositories={repositories}
          favoritesRepositories={favoritesRepositories}
          isFavoritesOn={isFavoritesOn}
          debouncedFilterInput={debouncedFilterInput}
          setFavoritesRepositories={setFavoritesRepositories}
        />
      </StyledContainer>
      <div ref={ref}></div>
    </>
  );
};

export default ListWithFavorites;
