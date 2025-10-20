import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonInformation, Pokemons } from "./page";
import { Error } from "./components/Error";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Pokemons />} />
        <Route path="pokemon/:idName" element={<PokemonInformation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
