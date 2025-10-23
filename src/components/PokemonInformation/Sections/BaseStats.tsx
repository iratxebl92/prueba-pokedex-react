import type { StatName } from "../../../types";
import { usePokemonCard } from "../../hooks/usePokemonCard";
import { Error, LoadingSpinner } from "../../";


export const BaseStats = () => {
  const { data, typeColors, isLoading, isError } = usePokemonCard();
  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="Error in bases stats" />
  const color = data?.types[0].type.name || "fire";
  const statType: Record<StatName, string> = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
  };

  return (
    <div>
      <p
        className="text-center text-xl font-bold"
        style={{ color: typeColors[color] }}
      >
        Base Stats
      </p>
      <div className="flex flex-col m-4 justify-center">
        {data?.stats.map((stat) => (
          <div key={stat.stat.name} className="flex flex-row items-center gap-4">
            {
              <div className="w-1/6 text-end">
                <p>{statType[stat.stat.name]}</p>
              </div>
            }
             <div className="w-0.5 self-stretch bg-gray-300"  />
            {
              <div className="w-1/6 text-start">
                <p>{stat.base_stat < 10 
                ? "00" + stat.base_stat 
                : stat.base_stat > 9 && stat.base_stat < 100
                ? "0" + stat.base_stat
                : stat.base_stat
            }</p>
              </div>
            }
            {
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mr-5 flex-grow">
                <div
                  className="h-2.5 rounded-full"
                  style={{width: stat.base_stat, backgroundColor: typeColors[color]}}
                ></div>
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};
