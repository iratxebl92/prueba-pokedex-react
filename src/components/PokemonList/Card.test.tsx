import { render, waitFor, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Card } from "./Card";
import type { PokemonCardType } from "../../types";
import {  MemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, type ReactNode } from "react";

const mockedUseNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const mod = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom"
  );
  return {
    ...mod,
    useNavigate: () => mockedUseNavigate,
  };
});

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children: ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};

describe("Test in <Card /> component", () => {
  const pokemon: PokemonCardType = {
    name: "bulbasur",
    id: 1,
    sprites: {
      other: {
        "official-artwork": {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        },
      },
    },
    types: [
      {
        type: {
          name: "fire",
        },
      },
    ],
  };

  it("Should be render <Card/> component", async () => {
    render(<Card pokemon={pokemon} />, { wrapper: createWrapper() });
  });
  it("Should be redirect to /pokemon/1-bulbasur ", async () => {
     render(<Card pokemon={pokemon} />, { wrapper: createWrapper() });
    const idName = `${pokemon.id}-${pokemon.name}`;
    const buttonNavigate = screen.getByRole("button");
    await act(() => {
      fireEvent.click(buttonNavigate);
    });
    await waitFor(() => {
      expect(mockedUseNavigate).toHaveBeenCalledWith(`/pokemon/${idName}`);
    });
  });
});
