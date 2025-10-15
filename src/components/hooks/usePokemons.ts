
import { usePokemonList } from "../../hooks/usePokemon"

export const usePokemons = () => {
    const {data} = usePokemonList()
   
  return {
    data, 
  }
}
