// react-router-dom
import { useParams } from "react-router-dom";

// @tanstack/react-query
import { useQuery } from "@tanstack/react-query";
import { getPokemonByName } from "../../../services/pokemonService";

const usePokemonInfoPage = () => {
  const { pokemonName } = useParams();
  const {
    data: pokemon,
    isLoading: pokemonQueryIsLoading,
    isError: pokemonQueryIsError,
  } = useQuery({
    queryKey: ["pokemon", pokemonName],
    queryFn: () =>
      pokemonName
        ? getPokemonByName(pokemonName)
        : Promise.reject("pokemonName is undefined."),
  });
  return {
    pokemonInfoArticleContextValue: pokemon
      ? {
          pokemonNumber: pokemon.id,
          pokemonName: pokemon.name,
          pokemonImage: pokemon.sprites.front_default,
          pokemonStatListItemPropsList: pokemon.stats.map((pokemonStat) => ({
            pokemonStatName: pokemonStat.stat.name,
            pokemonStatValue: pokemonStat.base_stat,
          })),
          pokemonTypeNames: pokemon.types.map(
            (pokemonType) => pokemonType.type.name
          ),
          pokemonHeight: pokemon.height,
          pokemonWeight: pokemon.weight,
          pokemonSpeciesName: pokemon.species.name,
          pokemonAbilityNames: pokemon.abilities.map(
            (pokemonAbility) => pokemonAbility.ability.name
          ),
        }
      : null,
    pokemonQueryIsLoading,
    pokemonQueryIsError,
  };
};

export default usePokemonInfoPage;
