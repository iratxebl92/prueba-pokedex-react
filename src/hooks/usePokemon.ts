import { useQuery } from "@tanstack/react-query";
import { getAllPokemons, getPokemon } from "../api/pokeApi";

export const usePokemonList = () => {
  return useQuery({
    queryKey: ["pokemonList"],
    queryFn: () => getAllPokemons(),
  });
};

// export const usePokemon = (id: string = "1") => {
//   return useQuery({
//     queryKey: ["pokemon", id],
//     queryFn: () => getPokemon(id),
//   });
// };
