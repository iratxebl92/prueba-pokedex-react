import { useNavigate } from "react-router-dom";
import { usePokemonCard } from "../hooks/usePokemonCard";
import { Arrow } from "../Icons"


export const Header = () => {
  const navigate =useNavigate()
    const { data, typeColors } = usePokemonCard();
    const color = data?.types[0].type.name || 'fire'

  return (
    <header className="" style={{backgroundColor: typeColors[color]}}>
        <div className="flex justify-between" >
          <p className="flex text-2xl"><span className="font-semibold text-white " onClick={() => navigate('/')}><Arrow/></span><span className="capitalize">{data?.name}</span></p>
          <p>#001</p>
        </div>
    </header>
  )
}
