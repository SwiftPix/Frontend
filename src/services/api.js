import axios from 'axios';

const api = axios.create({
  baseURL: 'http://seu-backend-url.com/api',
});

export default api;
