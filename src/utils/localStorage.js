const TOKEN_KEY = 'token';

const isToken = () => {
  return !!window.localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
  window.localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  window.localStorage.removeItem(TOKEN_KEY);
};

export { clearToken, isToken, setToken };
