
import { Types, Image, Information, About, BaseStats } from "./Sections";

export const PokemonCard = () => {
  return (
    <div className="bg-white h-[calc(100vh*(2/3)-5px)] rounded-lg relative">
      <Image />
      <div className="pt-13 w-full h-full">
        <Types />
        <About />
        <Information />
        <BaseStats />
      </div>
    </div>
  );
};
