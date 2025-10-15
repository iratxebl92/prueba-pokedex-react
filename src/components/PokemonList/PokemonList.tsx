
import type { PokemonListType } from "../../types"
import { usePokemons } from "../hooks/usePokemons";


export const PokemonList = () => {
        const {data} = usePokemons()
        if(!data) return null;
        // Todo: Crear Spinner para isError
 console.log(data, "daaata")
  return (
    <div>
      {
        data?.map((pokemon: PokemonListType) => (
          <>
          <p>{pokemon.name} </p>
          <img src={pokemon.url} alt="" />
          </>
        ))
      }
    </div>
  )
}
