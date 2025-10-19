import { usePokemonCard } from "../components/hooks/usePokemonCard";
import { Header, PokemonCard } from "../components/PokemonInformation"




export const PokemonInformation = () => {
    const { data, typeColors } = usePokemonCard();
      const color = data?.types[0].type.name || 'fire'
  return (
    <div style={{backgroundColor: typeColors[color]}} className="h-screen px-1">
    <Header />
    <PokemonCard/>
    </div>
  )
}
