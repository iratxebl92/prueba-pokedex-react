import { useParams } from "react-router-dom";
import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonStore } from "../../store/usePokemonStore";

export const usePokemonCard = () => {
  const {typeColors} = usePokemonStore()
  const {idName} = useParams()
  const selectedPokemon = idName?.split('-')[0]
  const {data, isLoading, isError} = usePokemon(Number(selectedPokemon))

  return {
    data,
    typeColors,
    isLoading,
    isError
  };
};
