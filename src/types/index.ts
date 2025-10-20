
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
  abilities: {
    ability: {
      name: string;
    }
  }[];
  stats: {
    base_stat: number,
    stat: {
        name: StatName
    }
  }[]
};

export type PokemonTypeName = 'fire' | 'water' | 'grass' | 'electric' | 'psychic' | 'ice' | 'dragon' | 'dark' | 'fairy' | 'normal' | 'fighting' | 'flying' | 'poison' | 'ground' | 'rock' | 'bug' | 'ghost' | 'steel';
export type StatName = 'hp' | 'attack' | 'defense' | 'special-attack' | 'special-defense' | 'speed';

export type PokemonText = {
  flavor_text_entries: {
    flavor_text: string;
  }[]
}