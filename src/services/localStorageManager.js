export const getCacheByKey = (key) => {
  return JSON.parse(window.localStorage.getItem(key));
};

export const setCacheValue = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
