const API_ROOT = 'http://codeial.com:8000/api/v2';

export const APIurls = {
  login: () => `${API_ROOT}/users/login`,
  signup: () => `${API_ROOT}/users/signup`,
  fetchPosts: (page = 1, limit = 5) =>
    `${API_ROOT}/posts/?page=e${page}&limit=${limit}`,
};