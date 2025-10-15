import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonInformation, Pokemons } from "./page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="pokemon" element={<PokemonInformation />} />
      </Routes>
    </BrowserRouter>
  );
};
