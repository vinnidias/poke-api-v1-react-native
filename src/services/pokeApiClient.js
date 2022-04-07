import axios from "axios";

export const pokeApiClient = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});