import axios from "axios";
import { BASE_URL } from "../utils/constants";
import type { PokemonListType } from "../types";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllPokemons = async () => {
  try {
    const response = await axiosInstance.get("pokemon?limit=20&offset=0");

   const pokemonList = await Promise.all(
      response.data.results?.map((pokemon: PokemonListType) =>
        getPokemon(pokemon.url.split("/")[6])
      )
    );
    return pokemonList;

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPokemon = async (id: string) => {
  try {
    const response = await axiosInstance.get(`pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
