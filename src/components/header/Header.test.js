import { screen, render } from '@testing-library/react';
import Header from './Header';

const props = {
  setIsFavoritesOn: () => {},
  isFavoritesOn: false,
  favoritesRepositories: [],
  setFilterInputValue: () => {},
  totalReposCount: 23451,
};

describe('---Header Component test---', () => {
  it('should check correct data fields', () => {
    render(<Header {...props} />);
    expect(screen.getByTestId('repos-count').innerHTML).toEqual(
      '23.5k results'
    );
  });
});
