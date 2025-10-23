import { Pokeball } from "../Icons/Pokeball";
import { Search } from "../Icons/Search";
import { usePokemonsList } from "../hooks/usePokemonsList";

export const Header = () => {
  const { setSearchPokemons } = usePokemonsList();

  function debounce<T extends (...args: string[]) => void>(func: T, delay = 250) {
    let timerId: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>) => {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  const handleInput = debounce((value: string) => {
    setSearchPokemons(value);
  }, 1000);

  return (
    <header className="p-3">
      <div className="flex text-center items-center gap-2">
        <Pokeball />
        <h2 className="text-white text-3xl font-bold">Pokédex</h2>
      </div>
      <div className="flex mt-4 gap-2">
        <div className="bg-white flex rounded-2xl h-10 items-center w-80 inset-shadow-sm inset-shadow-gray-400">
          <Search />
          <input
            required
            type="text"
            placeholder="Search"
            className="focus:outline-none"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              handleInput(event.target.value)
            }
          />
        </div>

        <button className="underline rounded-full text-red-500 bg-white w-11 inset-shadow-sm inset-shadow-gray-400">
          {" "}
          A
        </button>
      </div>
    </header>
  );
};
