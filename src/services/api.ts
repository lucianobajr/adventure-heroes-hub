import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.pokemontcg.io/v2/', // substituir pela URL da API
});

export { api }