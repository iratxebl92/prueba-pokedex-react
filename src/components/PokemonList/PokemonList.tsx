import { useState, useEffect } from "react";
import type { PokemonCard } from "../../types";
import { usePokemons } from "../hooks/usePokemons";
import { Card } from "./Card";

export const PokemonList = () => {
  const [limit, setlimit] = useState<number>(20);
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);

  const { data } = usePokemons({ limit });
 
 

  useEffect(() => {
    if (data) {
      setPokemons((prev) => [...prev, ...data]); //create new array with prev and data information
    }
  }, [data]);

  
  if (!pokemons) return null;

  const getMorePokemons = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setlimit((prev) => prev + 20);
  };

  // Todo: Crear Spinner para isError
  return (
    <div className="bg-white rounded-2xl p-2">
      <section className="grid grid-cols-3 ">
        {pokemons.map((pokemon: PokemonCard) => (
          <Card pokemon={pokemon} />
        ))}
      </section>
      <div className="text-center w-full mt-2">
        <button
          onClick={(e) => getMorePokemons(e)}
          className="w-fit p-2 rounded-lg border-2 border-red-500 shadow-2xl"
          type="button" //prevent reloading with setPokemons
        >
          Load More
        </button>
      </div>
    </div>
  );
};
