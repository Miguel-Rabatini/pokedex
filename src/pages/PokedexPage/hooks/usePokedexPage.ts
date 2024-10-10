// @tanstack/react-query
import { useInfiniteQuery, useQueries } from "@tanstack/react-query";

// Types
import { NamedAPIResourceList } from "../../../types/apiTypes";

// Services
import { getByUrl } from "../../../services/apiService";
import { getPokemonByName } from "../../../services/pokemonService";

const usePokemonNamedAPIResourceListInfiniteQuery = () => {
  const {
    data: pokemonNamedAPIResourceListInfiniteQueryData,
    isLoading: pokemonNamedAPIResourceListInfiniteQueryIsLoading,
    isFetching: pokemonNamedAPIResourceListInfiniteQueryIsFetching,
    isError: pokemonNamedAPIResourceListInfiniteQueryIsError,
    hasNextPage: hasNextPokemonNamedAPIResourceListPage,
    fetchNextPage: fetchNextPokemonNamedAPIResourceListPage,
  } = useInfiniteQuery({
    queryKey: ["pokemonNamedAPIResourceList"],
    queryFn: ({ pageParam }) => getByUrl<NamedAPIResourceList>(pageParam),
    initialPageParam: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=12",
    getNextPageParam: (lastPage) => lastPage.next,
  });

  return {
    pokemonNamedAPIResourceListInfiniteQueryData,
    pokemonNamedAPIResourceListInfiniteQueryIsLoading,
    pokemonNamedAPIResourceListInfiniteQueryIsFetching,
    pokemonNamedAPIResourceListInfiniteQueryIsError,
    hasNextPokemonNamedAPIResourceListPage,
    fetchNextPokemonNamedAPIResourceListPage,
  };
};

const usePokemonQueries = (pokemonNames: string[]) => {
  const pokemonQueries = useQueries({
    queries: pokemonNames.map((pokemonName) => ({
      queryKey: ["pokemon", pokemonName],
      queryFn: () => getPokemonByName(pokemonName),
    })),
  });

  return {
    pokemons: pokemonQueries.map((pokemonQuery) => pokemonQuery.data),
    somePokemonQueryIsLoading: pokemonQueries.some(
      (pokemonQuery) => pokemonQuery.isLoading,
    ),
    somePokemonQueryIsError: pokemonQueries.some(
      (pokemonQuery) => pokemonQuery.isError,
    ),
  };
};

const usePokedexPage = () => {
  const {
    pokemonNamedAPIResourceListInfiniteQueryData,
    pokemonNamedAPIResourceListInfiniteQueryIsLoading,
    pokemonNamedAPIResourceListInfiniteQueryIsFetching,
    pokemonNamedAPIResourceListInfiniteQueryIsError,
    hasNextPokemonNamedAPIResourceListPage,
    fetchNextPokemonNamedAPIResourceListPage,
  } = usePokemonNamedAPIResourceListInfiniteQuery();

  const pokemonNames = (
    pokemonNamedAPIResourceListInfiniteQueryData?.pages ?? []
  ).flatMap((pokemonNamedAPIResourceList) =>
    pokemonNamedAPIResourceList.results.map(
      (pokemonNamedAPIResource) => pokemonNamedAPIResource.name,
    ),
  );

  const { pokemons, somePokemonQueryIsLoading, somePokemonQueryIsError } =
    usePokemonQueries(pokemonNames);

  return {
    pokemonNamedAPIResourceListInfiniteQueryIsLoading,
    hasNextPokemonNamedAPIResourceListPage,
    fetchNextPokemonNamedAPIResourceListPage,
    pokemonListItemPropsList: pokemons.map((pokemon) =>
      pokemon
        ? {
            pokemonName: pokemon.name,
            pokemonNumber: pokemon.id,
            pokemonImage: pokemon.sprites.front_default,
            pokemonTypeNames: pokemon.types.map(
              (pokemonType) => pokemonType.type.name,
            ),
          }
        : null,
    ),
    someQueryIsLoading:
      pokemonNamedAPIResourceListInfiniteQueryIsFetching ||
      somePokemonQueryIsLoading,
    someQueryIsError:
      pokemonNamedAPIResourceListInfiniteQueryIsError ||
      somePokemonQueryIsError,
  };
};

export default usePokedexPage;
