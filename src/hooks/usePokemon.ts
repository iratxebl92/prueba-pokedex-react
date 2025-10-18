import { useQuery } from "@tanstack/react-query";
import { getAllPokemons, getListPokemons, getPokemon } from "../api/pokeApi";

export const usePokemonList = (limit:number) => {
  console.log(limit, "limit en usePokemon")
  return useQuery({
    queryKey: ["pokemonList", limit],
    queryFn: () => getAllPokemons(limit),
  });
};

export const usePokemon = (id: string = "1") => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => getPokemon(id),
  });
};

export const useAllPokemons = (searchParams: string | undefined) => {
  return useQuery({
    queryKey: ["pokemonList", searchParams],
    queryFn: () => getListPokemons(searchParams),
  });
};

