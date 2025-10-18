import { useEffect, useState } from "react";
import { useAllPokemons, usePokemonList } from "../../hooks/usePokemon";
import { usePokemonStore } from "../../store/usePokemonStore";
import type { PokemonCard } from "../../types";

export const usePokemonsList = () => {
  const [limit, setlimit] = useState<number>(20);
  const [pokemons, setPokemons] = useState<PokemonCard[]>([]);
  const [searchPokemon, setSearchPokemon] = useState<PokemonCard[] | null>(
    null
  );

  const { data } = usePokemonList(limit);
  const { searchParams } = usePokemonStore();
  const { data: allPokemons } = useAllPokemons(searchParams?.toLowerCase());

  useEffect(() => {
    if (data) {
      setPokemons(data); 
    }
  }, [data]);

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
  };
};
