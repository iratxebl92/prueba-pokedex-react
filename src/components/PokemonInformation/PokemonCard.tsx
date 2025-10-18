
import { usePokemonCard } from "../hooks/usePokemonCard";

export const PokemonCard = () => {
  const { data, typeColors } = usePokemonCard();
  const color = data?.types[0].type.name || 'fire'
console.log(data)
  return (
    <div>
      <p style={{color: typeColors[color]}}>Pokemon Charmander</p>  
    </div>
  );
};
