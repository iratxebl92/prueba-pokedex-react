import { beforeEach, describe,  it, vi } from "vitest";
import { render} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { ReactNode } from "react";
import { PokemonList } from "../components";
import { usePokemonList } from "../hooks/usePokemon";

vi.mock('../hooks/usePokemon')
const createWrapper = () => {
 
  const queryClient = new QueryClient();
  return ({ children}: {children: ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   
  );
};

describe("Test in PokemonList /> component", () => {
    const mockUsePokemonList = vi.mocked(usePokemonList)
 beforeEach(() => {
    vi.clearAllMocks();
  });


  it("Should be render <PokemonList/> component", async () => {
    render(<PokemonList />, { wrapper: createWrapper() });
    // const button = screen.getByText('Load More');
    // expect(button).toBeInTheDocument()
  });
    it("Should be", async () => {
    beforeEach(() => {
      mockUsePokemonList.mockReturnValue({ searchParams: '', getMorePokemons: () => 20, searchPokemon: [], pokemons: [], isLoadingList: false, isErrorList: false, isLoadingSearch: false, isErrorSearch: false });
    });
  });
});
