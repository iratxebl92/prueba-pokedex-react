import { usePokemonText } from "../../../hooks/usePokemon";
import { usePokemonCard } from "../../hooks/usePokemonCard";


export const Information = () => {
    const { data} = usePokemonCard();
    const {data:textData} = usePokemonText(data?.id || 1)
    console.log(textData)
  return (
    <div className="p-4 mt-4 text-base ">
        <p>{textData?.flavor_text_entries[0].flavor_text.replace(/[\n\f\r]+/g, ' ')} </p>
    </div>
  )
}
