
import { usePokemonCard } from "../hooks/usePokemonCard";

export const PokemonCard = () => {
  const { data, typeColors } = usePokemonCard();
  const color = data?.types[0].type.name || 'fire'
console.log(data)
  return (
    <div className="bg-white h-[calc(100vh*(2/3)-5px)] rounded-lg">
      <p style={{color: typeColors[color]}}>Pokemon Charmander</p>  
    </div>
  );
};
