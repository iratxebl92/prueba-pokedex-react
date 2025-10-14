import { usePokemonList } from "../hooks/usePokemon"

export const PokemonList = () => {
    const {data} = usePokemonList()
    console.log(data)
  return (
    <div>PokemonList</div>
  )
}
