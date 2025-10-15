import { usePokemon } from "../hooks/usePokemon"


export const PokemonCard = () => {
    const {data} = usePokemon(20)
    console.log(data)
  return (
    <div>PokemonCard</div>
  )
}
