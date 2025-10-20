import { usePokemonCard } from "../hooks/usePokemonCard";

import { About } from "./About";
import { Types } from "./Types";

export const PokemonCard = () => {
  const { data } = usePokemonCard();
  return (
    <div className="bg-white h-[calc(100vh*(2/3)-5px)] rounded-lg relative">
      <img
        className="absolute -top-48 left-15"
        src={data?.sprites.other["official-artwork"].front_default}
        alt="Pokemon Image"
        height={250}
        width={250}
      />
      <div className="pt-13 w-full h-full">
          <Types/>
          <About />
      </div>
    </div>
  );
};
