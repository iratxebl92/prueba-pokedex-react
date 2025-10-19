
import { usePokemonCard } from "../hooks/usePokemonCard";

export const PokemonCard = () => {
  const { data, typeColors } = usePokemonCard();
  const color = data?.types[0].type.name || 'fire'
console.log(data)
  return (
    <div className="bg-white h-[calc(100vh*(2/3)-5px)] rounded-lg relative">
      <img className="absolute -top-48 left-15" src={data?.sprites.other["official-artwork"].front_default} alt="Pokemon Image" height={250} width={250} /> 
      <div className="pt-13 w-full h-full">
        <div className="flex items-center justify-center gap-3">
          {data?.types.map(({type}) => (
            <p className="w-fit px-4 py-1.5 rounded-full text-white capitalize font-semibold" key={type.name} style={{backgroundColor: typeColors[type.name]}} > {type.name} </p>
          ))}
        </div>
      </div>
    </div>
  );
};
