import { usePokemonText } from "../../../hooks/usePokemon";
import { usePokemonCard } from "../../hooks/usePokemonCard";
import { LoadingSpinner, Error } from "../../";


export const Information = () => {
    const { data, isLoading, isError } = usePokemonCard();
    const {data:textData} = usePokemonText(data?.id || 1)
    if(isLoading) return <LoadingSpinner/>
    if(isError) return <Error message="Error loading Pokemon Information" />

  return (
    <div className="p-4 mt-4 text-base ">
        <p>{textData?.flavor_text_entries[0].flavor_text.replace(/[\n\f\r]+/g, ' ')} </p>
    </div>
  )
}
