
import type { PokemonCardType } from "../../types";
import { usePokemonsList } from "../hooks/usePokemonsList";
import { Card } from "./Card";


export const PokemonList = () => {

 const {searchParams, getMorePokemons, searchPokemon, pokemons } = usePokemonsList()
  

  return (
    <div className="bg-white rounded-2xl p-2 min-h-screen">
        <section className="grid grid-cols-3 ">
          {searchParams
            ? searchPokemon?.map((pokemon: PokemonCardType) => (
                <Card pokemon={pokemon} />
              ))
            : pokemons.map((pokemon: PokemonCardType) => (
                <Card pokemon={pokemon} />
              ))}
        </section>
      <div className="text-center w-full mt-2">
        {!searchParams && <button
          onClick={(e) => getMorePokemons(e)}
          className="w-fit p-2 rounded-lg border-2 border-red-500 shadow-2xl"
          type="button" //prevent reloading with setPokemons
        >
          Load More
        </button>}
      </div>
    </div>
  );
};
