export const CONSTANTS = {
  API_BASE_URL: 'http://127.0.0.1:8000/',
};

export const headerGenerator = (token: any) => {
  const API_CONFIG = {
    headers: {
      Accept: 'application/json',
      Authorization: token,
    },
  };
  return API_CONFIG;
};
