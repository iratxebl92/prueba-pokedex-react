import { useNavigate } from "react-router-dom";
import { usePokemonCard } from "../hooks/usePokemonCard";
import { Arrow } from "../Icons"
import { pokeballSVG } from '../Icons/Pokeball'


export const Header = () => {
  const navigate =useNavigate()
    const { data, typeColors } = usePokemonCard();
    const color = data?.types[0].type.name || 'fire'

  return (
    <header className="h-[calc(100vh*(1/3))] relative" >
      <div className="absolute inset-0" style={{
      backgroundColor: typeColors[color], 
      backgroundImage: `url(${pokeballSVG})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      backgroundSize: 'contain',
      opacity: 0.1,
      zIndex: 10
    }} />
     
        <div className="flex justify-between items-center text-white font-semibold p-4 opacity-100">
          <p className="flex text-3xl"><span className="font-semibold text-white" onClick={() => navigate('/')}><Arrow/></span><span className="capitalize">{data?.name}</span></p>
          <p className="">#001</p>
        </div>
    </header>
  )
}
