import { useQuery } from "@tanstack/react-query";
import { getAllPokemons, getListPokemons, getPokemon } from "../api/pokeApi";
import { type PokemonCardType, type PokemonType } from "../types";

export const usePokemonList = (limit:number) => {
  return useQuery<PokemonCardType[] | null>({
    queryKey: ["pokemonList", limit],
    queryFn: () => getAllPokemons(limit),
  });
};

export const usePokemon = (id: number = 1) => {
  return useQuery<PokemonType | null>({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });
};

export const useAllPokemons = (searchParams: string | undefined) => {
  return useQuery<PokemonCardType[] | null>({
    queryKey: ["pokemonList", searchParams],
    queryFn: () => getListPokemons(searchParams),
  });
};


// Type is null if there is an error(catch)