export const kFormatter = (num) => {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
    : Math.sign(num) * Math.abs(num);
};

export const getSubtractedDate = (baseDate, shift) => {
  var d = new Date(baseDate);
  return getFormattedDate(d.setDate(d.getDate() - shift));
};

export const getFormattedDate = (date) => {
  return new Date(date).toISOString().split('T')[0];
};

export const removeRepoFromFavorites = (favoritesRepositories, repo) => {
  return favoritesRepositories.filter((el) => el.id !== repo.id);
};

export const isRepoInFavorites = (favoritesRepositories, repo) => {
  return favoritesRepositories.find((el) => el.id === repo.id);
};

export const convertHeavyRepoToLightRepo = (repo) => {
  return {
    id: repo.id,
    language: repo.language,
    owner: { avatar_url: repo.owner.avatar_url },
    html_url: repo.html_url,
    full_name: repo.full_name,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
    updated_at: repo.updated_at,
  };
};

export const addRepoToFavorites = (favoritesRepositories, repo) => {
  return [...favoritesRepositories, convertHeavyRepoToLightRepo(repo)];
};
