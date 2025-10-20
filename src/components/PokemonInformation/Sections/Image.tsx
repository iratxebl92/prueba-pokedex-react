import { usePokemonCard } from "../../hooks/usePokemonCard";

export const Image = () => {
  const { data } = usePokemonCard();
  console.log(data)
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
