import { useEffect, useState } from "react";
import { useAllPokemons, usePokemonList } from "../../hooks/usePokemon";
import { usePokemonStore } from "../../store/usePokemonStore";
import type { PokemonCardType } from "../../types";

export const usePokemonsList = () => {
  const [limit, setlimit] = useState<number>(20);
  const [pokemons, setPokemons] = useState<PokemonCardType[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<PokemonCardType[] | null>(
    null
  );

  const { data: listData, isLoading: isLoadingList, isError: isErrorList } = usePokemonList(limit);
  const { searchParams, setSearchPokemons, typeColors } = usePokemonStore();
  const { data: allPokemons, isLoading: isLoadingSearch, isError: isErrorSearch } = useAllPokemons(searchParams?.toLowerCase());

  useEffect(() => {
    if (listData) {
      setPokemons(listData); 
    }
  }, [listData]);

  useEffect(() => {
    if (!allPokemons) return;
    setSearchPokemon(allPokemons);
  }, [allPokemons]);

  const getMorePokemons = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setlimit((prev) => prev + 20);
  };


  return {
    searchParams,
    getMorePokemons,
    searchPokemon,
    pokemons,
    setSearchPokemons,
    typeColors,
    isLoadingList,
    isErrorList,
    isLoadingSearch,
    isErrorSearch,
  };
};
