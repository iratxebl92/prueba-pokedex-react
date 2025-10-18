import axios from "axios";
import { BASE_URL } from "../utils/constants";
import type { PokemonCardType, PokemonListType } from "../types";

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
    return pokemonList as PokemonCardType[];

  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getPokemon = async (id: string | number) => {
  console.log(id, "iddd")

  try {
    const response = await axiosInstance.get(`pokemon/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getListPokemons = async (searchParams: string | undefined) => {
   try {
    if (!searchParams) return null;
    
    const response = await axiosInstance.get(`pokemon?limit=40&offset=0`);
   const pokemonList = await Promise.all(
      response.data.results?.map((pokemon: PokemonListType) =>
        getPokemon(pokemon.url.split("/")[6])
      )
    );
    const pokemonFilter = pokemonList.filter((poke) => poke?.name?.includes(searchParams))
    return pokemonFilter as PokemonCardType[];

  } catch (error) {
    console.error(error);
    return null;
  }
}
