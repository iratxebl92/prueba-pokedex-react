import { usePokemonCard } from "../../hooks/usePokemonCard";
import { LoadingSpinner, Error } from "../../";


export const Types = () => {
      const { data, typeColors, isLoading, isError } = usePokemonCard();
  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="Error loading Pokemon Types" />
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
