
export type PokemonListType = {
    name: string;
    url: string
}

export type PokemonCardType = {
    name: string,
    id: number,
    sprites: {
        other:{
            "official-artwork": {
                front_default: string;
            }
        }
    },
    types: {
        type: {
            name: PokemonTypeName
        }
    }[]
}
export type PokemonType = PokemonCardType & {
  height: number;
  weight: number;
  abilities: string[];
  stats: {
    base_stat: number,
    stat: {
        name: string
    }
  }[]
};

export type PokemonTypeName = 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel';