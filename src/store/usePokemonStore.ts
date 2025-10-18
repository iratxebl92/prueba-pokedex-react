import { create } from "zustand";
import type { PokemonTypeName } from "../types";

interface PokemonsStore {
  searchParams: string | undefined;
  setSearchPokemons: (pokemon: string) => void;
  typeColors: Record<PokemonTypeName, string>; // Record<K, T> creates an object type where: K are the keys and T are the values
}

export const usePokemonStore = create<PokemonsStore>((set) => ({
  searchParams: undefined,
  setSearchPokemons: (pokemon) =>
    set({
      searchParams: pokemon,
    }),
  typeColors: {
    fire: "#F57D31",
    water: "#6493EB",
    grass: "#74CB48",
    electric: "#F9CF30",
    bug: "#A7B723",
    poison: "#A43E9E",
    normal: "#AAA67F",
    flying: "#A891EC",
    psychic: "#FB5584",
    rock: "#B69E31",
    ground: "#DEC16B",
    ice: "#9AD6DF",
    dragon: "#7037FF",
    dark: "#75574C",
    steel: "#B7B9D0",
    fairy: "#E69EAC",
    ghost: "#70559B",
    fighting: "#C12239",
  },
}));
