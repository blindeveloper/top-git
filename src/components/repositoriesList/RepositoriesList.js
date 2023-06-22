import React from 'react';
import Repository from '../../repository/Repository';
import { setCacheValue } from '../../services/localStorageManager';
import {
  isRepoInFavorites,
  removeRepoFromFavorites,
  addRepoToFavorites,
} from '../../services/utils';
import { StyledRepositoriesList } from './StyledRepositoriesList';

const RepositoriesList = ({
  repositories,
  favoritesRepositories,
  isFavoritesOn,
  debouncedFilterInput,
  setFavoritesRepositories,
}) => {
  const toggleFavoritesStatus = (repo) => {
    const updatedFavoriteList = getUpdatedFavoriteList(repo);
    if (updatedFavoriteList) {
      setFavoritesRepositories(updatedFavoriteList);
      setCacheValue('favorites', updatedFavoriteList);
    }
  };

  const getUpdatedFavoriteList = (repo) => {
    if (isRepoInFavorites(favoritesRepositories, repo)) {
      return removeRepoFromFavorites(favoritesRepositories, repo);
    } else {
      return addRepoToFavorites(favoritesRepositories, repo);
    }
  };

  const repoToRender = isFavoritesOn ? favoritesRepositories : repositories;
  const filterRepos = (repos) => {
    return repos.filter(
      (el) =>
        el.language &&
        el.language.toLowerCase().includes(debouncedFilterInput.toLowerCase())
    );
  };

  return (
    <StyledRepositoriesList>
      {filterRepos(repoToRender).map((repo) => (
        <div data-testid={`repo-item-${repo.id}`} key={repo.id}>
          <Repository
            repo={repo}
            toggleFavoritesStatus={toggleFavoritesStatus}
            favoritesRepositories={favoritesRepositories}
          />
        </div>
      ))}
    </StyledRepositoriesList>
  );
};

export default RepositoriesList;
