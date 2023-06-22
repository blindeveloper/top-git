import { screen, render } from '@testing-library/react';
import RepositoriesList from './RepositoriesList';

const props = {
  repositories: [
    {
      id: 65434536905384,
      language: 'Python',
      owner: {
        avatar_url: 'https://avatars.githubusercontent.com/u/29677746?v=4',
      },
      html_url: 'https://github.com/princeton-vl/infinigen',
      full_name: 'princeton-vl/infinigen',
      description: 'Infinite Photorealistic Worlds using Procedural Generation',
      stargazers_count: 3089,
      updated_at: '2023-06-22T22:18:11Z',
    },
    {
      id: 655423478177,
      language: 'Go',
      owner: {
        avatar_url: 'https://avatars.githubusercontent.com/u/61847557?v=4',
      },
      html_url: 'https://github.com/techleadhd/chatgpt-retrieval',
      full_name: 'techleadhd/chatgpt-retrieval',
      description: null,
      stargazers_count: 32,
      updated_at: '2023-06-22T22:35:49Z',
    },
  ],
  favoritesRepositories: [],
  isFavoritesOn: false,
  debouncedFilterInput: '',
  setFavoritesRepositories: () => {},
};

describe('---RepositoriesList Component test---', () => {
  it('should check correct data fields', () => {
    render(<RepositoriesList {...props} />);
    expect(
      screen.getByTestId(`repo-item-${props.repositories[0].id}`)
    ).toBeDefined();
    expect(
      screen.getByTestId(`repo-item-${props.repositories[1].id}`)
    ).toBeDefined();
  });
});
