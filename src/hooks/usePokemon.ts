import { useQuery } from "@tanstack/react-query";
import { getAllPokemons, getPokemon } from "../api/pokeApi";
import type { PokemonCard } from "../types";

export const usePokemonList = (limit: number, ) =>
  useQuery<PokemonCard[] | null>({
    queryKey: ["pokemonList", limit],
    queryFn: () => getAllPokemons(limit),
  });

// export const usePokemon = (id: string = "1") => {
//   return useQuery({
//     queryKey: ["pokemon", id],
//     queryFn: () => getPokemon(id),
//   });
// };
