import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8000/', // Ajuste conforme sua API
});

// Interceptador para incluir o token no cabeçalho
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Recupera o token do localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});
