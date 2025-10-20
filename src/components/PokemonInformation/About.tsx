import { usePokemonCard } from "../hooks/usePokemonCard";
import { Height } from "../Icons/Height";
import { Weight } from "../Icons/Weight"


export const About = () => {
      const { data, typeColors } = usePokemonCard();
      const color = data?.types[0].type.name || "fire";
  return (
            <div className=" mt-5">
          <p
            className="text-center font-bold text-xl mb-3"
            style={{ color: typeColors[color] }}
          >
            About
          </p>
          <div className="flex items-end justify-around">
            <div className="flex flex-col items-center gap-2">
              <p className="flex gap-2"><span className=""><Weight/></span> {(data?.weight || 0) / 10}kg</p>
              <p className="text-gray-500 text-xs">Weight</p>
            </div>
            <div className="w-0.5 h-12 bg-gray-400/60" />
            <div className="flex flex-col items-center gap-2">
              <p className="flex gap-2"><span className=""><Height/></span> {(data?.height || 0) / 10}m</p>
              <p className="text-gray-500 text-xs">Height</p>
            </div>
            <div className="w-0.5 h-12 bg-gray-400/60" />

            <div className="flex flex-col items-center">
              <div className="flex flex-col gap-1 mb-1">
                {data?.abilities.map((ability, index) => (
                  <p key={index} className="text-sm leading-3 capitalize">
                    {ability.ability.name}
                  </p>
                ))}
              </div>
              <p className="text-gray-500 text-xs">Moves</p>
            </div>
          </div>
        </div>
  )
}
