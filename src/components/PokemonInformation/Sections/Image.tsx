import { usePokemonCard } from "../../hooks/usePokemonCard";
import { LoadingSpinner, Error } from "../../";

export const Image = () => {
  const { data, isLoading, isError } = usePokemonCard();
  if(isLoading) return <LoadingSpinner/>
  if(isError) return <Error message="Error loading Pokemon Image" />

  return (
    <img
      className="absolute -top-48 left-15"
      src={data?.sprites.other["official-artwork"].front_default}
      alt="Pokemon Image"
      height={250}
      width={250}
    />
  );
};
