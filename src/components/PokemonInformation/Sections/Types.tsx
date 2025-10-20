import { usePokemonCard } from "../../hooks/usePokemonCard";


export const Types = () => {
      const { data, typeColors } = usePokemonCard();
      const color = data?.types[0].type.name || "fire";
  return (
           <div className="flex items-center justify-center gap-3">
          {data?.types.map(({ type }) => (
            <p
              className="w-fit px-4 py-1.5 rounded-full text-white capitalize font-semibold"
              key={type.name}
              style={{ backgroundColor: typeColors[type.name] }}
            >
              {" "}
              {type.name}{" "}
            </p>
          ))}
        </div>
  )
}
