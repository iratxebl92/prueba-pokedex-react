import type { PokemonCard } from "../../types";
import { usePokemons } from "../hooks/usePokemons";
import { Card } from "./Card";

export const PokemonList = () => {
  const { data } = usePokemons();
  if (!data) return null;
  // Todo: Crear Spinner para isError
  return (
    <div className="grid grid-cols-3  bg-white rounded-2xl p-2">
      {data?.map((pokemon: PokemonCard) => (
        <Card pokemon={pokemon} />
      ))}
    </div>
  );
};
