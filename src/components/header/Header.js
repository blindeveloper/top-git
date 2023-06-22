import React from 'react';
import { kFormatter } from '../../services/utils';
import {
  StyledHeader,
  StyledItemWrapper,
  StyledInput,
  StyledButton,
  StyledResults,
} from './StyledHeader';
import { StyledContainer, StyledItem } from '../StyledGlobal';

const Header = ({
  setIsFavoritesOn,
  isFavoritesOn,
  favoritesRepositories,
  setFilterInputValue,
  totalReposCount,
}) => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledItemWrapper>
          <StyledItem>
            <StyledInput
              placeholder="Filter by language"
              onChange={(e) => setFilterInputValue(e.target.value)}
            />
          </StyledItem>
          <StyledItem>
            <StyledButton
              $isFavoritesOn={isFavoritesOn}
              onClick={() => setIsFavoritesOn(!isFavoritesOn)}
            >
              Favorites [{favoritesRepositories && favoritesRepositories.length}
              ]
            </StyledButton>
          </StyledItem>
          <StyledItem>
            <StyledResults data-testid="repos-count">
              {kFormatter(totalReposCount)} results
            </StyledResults>
          </StyledItem>
        </StyledItemWrapper>
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
