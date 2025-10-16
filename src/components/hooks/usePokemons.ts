
import { usePokemonList } from "../../hooks/usePokemon"

type Props = {
limit: number,
}
export const usePokemons = ({limit}: Props) => {

    const {data} = usePokemonList(limit)
   
  return {
    data, 
  }
}
