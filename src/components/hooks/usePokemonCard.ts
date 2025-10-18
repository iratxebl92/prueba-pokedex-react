import { usePokemon } from "../../hooks/usePokemon";
import { usePokemonStore } from "../../store/usePokemonStore";

export const usePokemonCard = () => {
  const { data } = usePokemon();
  const {typeColors} = usePokemonStore()

  return {
    data,
    typeColors
  };
};
