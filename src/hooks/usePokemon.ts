import { useQuery } from "@tanstack/react-query";
import { getAllPokemons, getListPokemons, getPokemon, getPokemonText } from "../api/pokeApi";
import {type  PokemonText, type PokemonCardType, type PokemonType } from "../types";

export const usePokemonList = (limit:number) => {
  return useQuery<PokemonCardType[] | null>({
    queryKey: ["pokemonList", limit],
    queryFn: () => getAllPokemons(limit),
  });
};

export const usePokemon = (id: number) => {
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

export const usePokemonText = (id: number) => {
  return useQuery<PokemonText | null>({
    queryKey: ["pokemonText", id],
    queryFn: () => getPokemonText(id)
  })
}

// Type is null if there is an error(catch)