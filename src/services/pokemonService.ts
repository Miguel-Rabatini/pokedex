// Types
import { Pokemon } from "../types/apiTypes";

const BASE_URl = "https://pokeapi.co/api/v2/pokemon/";

export const getPokemonByName = async (
  pokemonName: string
): Promise<Pokemon> => {
  const response = await fetch(`${BASE_URl}${pokemonName}`);
  return await response.json();
};
