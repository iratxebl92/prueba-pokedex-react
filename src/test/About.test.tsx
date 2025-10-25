import { afterEach, describe, it } from "vitest";
import { cleanup, render } from "@testing-library/react";
import { About } from "../components/PokemonInformation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import type { ReactNode } from "react";

const createWrapper = () => {
 
  const queryClient = new QueryClient();
  return ({ children}: {children: ReactNode}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
   
  );
};

describe("Test in About /> component", () => {
  afterEach(cleanup);

  it("Should be render <About/> component", async () => {
    render(<About />, { wrapper: createWrapper() });
  });
});
