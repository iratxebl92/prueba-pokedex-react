
import {create} from 'zustand'

interface PokemonsStore {
    searchParams: string | undefined
    setSearchPokemons: (pokemon: string) => void
}

export const usePokemonStore = create<PokemonsStore>((set) => ({
    searchParams: undefined,
    setSearchPokemons: (pokemon) => set({
        searchParams: pokemon
    })
}))