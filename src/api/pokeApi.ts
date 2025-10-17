import axios from "axios";
import { BASE_URL } from "../utils/constants";
import type { PokemonCard, PokemonListType } from "../types";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const getAllPokemons = async (limit = 20)=> {
  try {
    const response = await axiosInstance.get(`pokemon?limit=${limit}&offset=0`);

   const pokemonList = await Promise.all(
      response.data.results?.map((pokemon: PokemonListType) =>
        getPokemon(pokemon.url.split("/")[6])
      )
    );
    return pokemonList as PokemonCard[];

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPokemon = async (name: string) => {
  try {
    const response = await axiosInstance.get(`pokemon/${name}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
