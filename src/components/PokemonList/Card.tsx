import type { PokemonCard } from "../../types"


type Props = {
    pokemon: PokemonCard
}

export const Card = ({pokemon}: Props) => {
    console.log(pokemon, "pokeee")
  return (
    <div className="relative bg-white shadow-[0_10px_10px_rgba(0,0,0,0.2)] m-1 rounded-xl h-34 flex flex-col items-center">
          <div className="absolute bg-slate-500/15 w-full h-15 bottom-0 rounded-lg"/>
          <p className="absolute right-1.5 top-0.5 text-[10px] text-gray-400">
            #
           {
            pokemon.order < 10 ? '00'+ pokemon.order :  pokemon.order > 9 && pokemon.order < 100 ? '0' + pokemon.order : pokemon.order
           }
            </p>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="pokemon image"
            width={"95px"}
            className="mt-3 z-10"
          />
          <p className="capitalize text-sm">{pokemon.name} </p>
        </div>
  )
}
