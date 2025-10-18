import { useNavigate } from "react-router-dom"
import type {PokemonType } from "../../types"
import { usePokemonsList } from "../hooks/usePokemonsList"


type Props = {
    pokemon: PokemonType
}

export const Card = ({pokemon}: Props) => {
   let navigate = useNavigate()
   const handleClick = () => {
    const idName = `${pokemon.id}-${pokemon.name}`
    navigate(`/pokemon/${idName}`)
   }
   const {typeColors} = usePokemonsList()
   const activeColor = typeColors[pokemon.types[0].type.name] || 'fire'

  return (
    <div 
      className="relative bg-white shadow-[0_10px_10px_rgba(0,0,0,0.2)] m-1 rounded-xl h-34 flex flex-col items-center" 
      onClick={handleClick} 

    >
          <div   style={{backgroundColor: activeColor }}  className="absolute bg-slate-500/15 w-full h-15 bottom-0 rounded-lg"/>
          <p className="absolute right-1.5 top-0.5 text-[10px] text-gray-400">
            #
           {
            pokemon.id < 10 ? '00'+ pokemon.id :  pokemon.id > 9 && pokemon.id < 100 ? '0' + pokemon.id : pokemon.id
           }
            </p>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemon image"
            width={"95px"}
            className="mt-3 z-10"
          />
          <p className="capitalize text-sm text-white z-20">{pokemon.name} </p>
        </div>
  )
}
