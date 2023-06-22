import { screen, render } from '@testing-library/react';
import Repository from './Repository';

const props = {
  repo: {
    id: 655900816,
    language: 'PHP',
    owner: {
      avatar_url: 'https://avatars.githubusercontent.com/u/136950467?v=4',
    },
    html_url: 'https://github.com/blinq-dev/laravel-synth',
    full_name: 'blinq-dev/laravel-synth',
    description: 'Generate Laravel code with ChatGPT',
    stargazers_count: 38,
    updated_at: '2023-06-22T11:29:10Z',
  },
  toggleFavoritesStatus: () => {},
  favoritesRepositories: [],
};

describe('---Repository Component test---', () => {
  it('should check correct data fields', () => {
    render(<Repository {...props} />);
    expect(screen.getByTestId('repo-full-name').innerHTML).toEqual(
      'blinq-dev/laravel-synth'
    );
    expect(screen.getByTestId('repo-description').innerHTML).toEqual(
      'Generate Laravel code with ChatGPT'
    );
    expect(screen.getByTestId('repo-language').innerHTML).toEqual('PHP · ');
    expect(screen.getByTestId('repo-stars-count').innerHTML).toEqual(
      '⭐ 38 · '
    );
    expect(screen.getByTestId('repo-updated-on').innerHTML).toEqual(
      'Updated on 2023-06-22'
    );
  });
});
