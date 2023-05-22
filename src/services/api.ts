import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketshoes-desafio.vercel.app:3333',
});
