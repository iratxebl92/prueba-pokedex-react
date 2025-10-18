import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonInformation, Pokemons } from "./page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="pokemon/:idName" element={<PokemonInformation />} />
      </Routes>
    </BrowserRouter>
  );
};
