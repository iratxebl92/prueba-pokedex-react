import { useQuery } from "@tanstack/react-query";
import { getAllPokemons, getPokemon } from "../api/pokeApi";
import type { PokemonCard } from "../types";

export const usePokemonList = (limit: number, ) =>
  useQuery<PokemonCard[] | null>({
    queryKey: ["pokemonList", limit],
    queryFn: () => getAllPokemons(limit),
  });

export const usePokemon = (name: string = "Bulbasur") => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });
};
