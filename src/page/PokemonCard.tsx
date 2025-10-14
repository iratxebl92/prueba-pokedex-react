import { usePokemon } from "../hooks/usePokemon"


export const PokemonCard = () => {
    const {data} = usePokemon(3)
    console.log(data)
  return (
    <div>PokemonCard</div>
  )
}
