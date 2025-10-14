import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonList } from "./page/PokemonList";
import { PokemonCard } from "./page";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="pokemon" element={<PokemonCard />} />
      </Routes>
    </BrowserRouter>
  );
};
