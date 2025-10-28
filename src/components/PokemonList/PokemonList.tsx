
import type { PokemonCardType } from "../../types";
import { usePokemonsList } from "../hooks/usePokemonsList";
import { Card } from "./Card";
import { LoadingSpinner, Error } from "../";


export const PokemonList = () => {

 const {searchParams, getMorePokemons, searchPokemon, pokemons, isLoadingList, isErrorList, isLoadingSearch, isErrorSearch } = usePokemonsList()
 
  if (!searchParams && isLoadingList || searchParams && isLoadingSearch) {
    return (
      <div className="bg-red-300 rounded-2xl p-2 min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!searchParams && isErrorList || searchParams && isErrorSearch) {
    return (
      <div className="bg-white rounded-2xl p-2 min-h-screen flex items-center justify-center">
        <Error message="Error loading Pokemons" />
      </div>
    );
  }


  const viewPokemons = searchParams ? searchPokemon : pokemons
  console.log(viewPokemons)
  return (
    <div className="bg-white rounded-2xl p-2 min-h-screen">
        <section className="grid grid-cols-3 ">
          {viewPokemons?.map((pokemon: PokemonCardType) => (
                <Card key={pokemon.id} pokemon={pokemon} />
              ))}
        </section>
      <div className="text-center w-full mt-2">
        {!searchParams && <button
          onClick={(e) => getMorePokemons(e)}
          className="w-fit p-2 rounded-lg border-2 border-red-500 shadow-2xl hover:cursor-pointer hover:bg-red-500 hover:text-white"
          type="button" //prevent reloading with setPokemons
        >
          Load More
        </button>}
      </div>
    </div>
  );
};
