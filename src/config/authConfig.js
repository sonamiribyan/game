import axios from 'axios';
const authConfig = axios.create({
  baseURL: 'http://192.168.31.33:4000/api/v1/diller', // Replace with your API base URL
  // Add other authentication-related configuration variables
});

authConfig.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers['diller_access_token'] = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

authConfig.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('not autorizated');

    }
    return Promise.reject(error);
  }
);

export default authConfig;
