export type NamedAPIResource = {
  name: string;
  url: string;
};

export type NamedAPIResourceList = {
  count: number;
  next: string;
  previous: string;
  results: NamedAPIResource[];
};

export type PokemonAbility = {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
};

export type VersionGameIndex = {
  game_index: number;
  version: NamedAPIResource;
};

export type PokemonHeldItemVersion = {
  version: NamedAPIResource;
  rarity: number;
};

export type PokemonHeldItem = {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
};

export type PokemonMoveVersion = {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
};

export type PokemonMove = {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
};

export type PokemonType = {
  slot: number;
  type: NamedAPIResource;
};

export type PokemonTypePast = {
  generation: NamedAPIResource;
  types: PokemonType[];
};

export type PokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
};

export type PokemonCries = {
  latest: string;
  legacy: string;
};

export type PokemonStat = {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
};

export type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  cries: PokemonCries;
  species: NamedAPIResource;
  stats: PokemonStat[];
  types: PokemonType[];
};
