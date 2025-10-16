
export type PokemonListType = {
    name: string;
    url: string
}

export type PokemonCard = {
    name: string,
    id: number,
    sprites: {
        other:{
            "official-artwork": {
                front_default: string;
            }
        }
    }
}