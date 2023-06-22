import React from 'react';
import {
  kFormatter,
  getFormattedDate,
  isRepoInFavorites,
} from '../services/utils';
import {
  StyledRepository,
  StyledRepoNameWithImg,
  StyledImg,
  StyledFavoriteIcon,
  StyledRepoInfo,
} from './StyledRepository';

const Repository = ({ repo, toggleFavoritesStatus, favoritesRepositories }) => {
  return (
    <StyledRepository>
      <div>
        {
          <StyledRepoNameWithImg>
            <StyledImg src={repo.owner.avatar_url} />
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              <span data-testid="repo-full-name">{repo.full_name}</span>
            </a>
          </StyledRepoNameWithImg>
        }
        {repo.description && (
          <p data-testid="repo-description">{repo.description}</p>
        )}
        <StyledRepoInfo>
          {repo.language && (
            <span data-testid="repo-language">{repo.language} · </span>
          )}
          <span data-testid="repo-stars-count">
            ⭐ {kFormatter(repo.stargazers_count)} ·{' '}
          </span>
          <span data-testid="repo-updated-on">
            Updated on {getFormattedDate(repo.updated_at)}
          </span>
          <StyledFavoriteIcon onClick={() => toggleFavoritesStatus(repo)}>
            {isRepoInFavorites(favoritesRepositories, repo) ? '♥' : '♡'}
          </StyledFavoriteIcon>
        </StyledRepoInfo>
      </div>
    </StyledRepository>
  );
};

export default Repository;
