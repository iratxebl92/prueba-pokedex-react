import { Header, PokemonList } from "../components"

export const Pokemons = () => {

  return (
    <div className="bg-red-600 w-screen min-h-screen p-1.5">
      <Header/>
      <PokemonList/>
    </div>
  )
}
