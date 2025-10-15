import { Header } from "../components/PokemonList/Header"
import { usePokemonList } from "../hooks/usePokemon"

export const PokemonList = () => {
    const {data} = usePokemonList()
    console.log(data)
  return (
    <div className="bg-red-700 w-screen h-screen">
      <Header/>
    </div>
  )
}
