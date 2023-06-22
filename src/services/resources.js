import axios from 'axios';

export const getGithubRepositories = (subtractedDate, pageCount, setError) => {
  const request = `https://api.github.com/search/repositories?q=created:%3E${subtractedDate}&sort=stars&order=desc&page=${pageCount}`;

  return axios
    .get(request)
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      setError(error);
    });
};
