import { Pokeball } from "../Icons/Pokeball";
import { Search } from "../Icons/Search";

export const Header = () => {
  return (
    <header className="p-3">
      <div className="flex text-center items-center gap-2">
        <Pokeball />
        <h2 className="text-white text-3xl font-bold">Pokédex</h2>
      </div>
      <div className="flex mt-4 gap-2">
        <div className="bg-white flex rounded-2xl h-10 items-center w-80 inset-shadow-sm inset-shadow-gray-400">
          <Search />
          <input required type="text" placeholder="Search" className="" />
        </div>

        <button className="underline rounded-full text-red-500 bg-white w-11 inset-shadow-sm inset-shadow-gray-400"> A</button>
      </div>
    </header>
  );
};
