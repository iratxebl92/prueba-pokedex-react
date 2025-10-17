
import {create} from 'zustand'

interface PokemonsStore {
    searchPokemons: string
    setSearchPokemons: (pokemon: string) => void
}

export const usePokemonStore = create<PokemonsStore>((set) => ({
    searchPokemons: '',
    setSearchPokemons: (pokemon) => set({
        searchPokemons: pokemon
    })
}))