export interface PokemonList {
  count: string;
  next?: string;
  previous?: string;
  results: PokemonItem[];
}

export interface PokemonItem {
  name: string;
  url: string;
  image: string;
  id: string;
}
