// react-router-dom
import { Link } from "react-router-dom";

// @tanstack/react-query
import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
  InfiniteData,
} from "@tanstack/react-query";

// Types
import { NamedAPIResourceList } from "../../types/apiTypes";

// Utils
import defineBgColorByPokemonTypeName from "../../utils/defineBgColorByPokemoTypeName";

// Hooks
import usePokedexPage from "./hooks/usePokedexPage";

// Components
import PokemonNumber from "../../components/PokemonNumber";
import ImageWithContainer from "../../components/ImageWithContainer";
import PokemonTypeNameList from "../../components/PokemonTypeNameList";
import ErrorScreen from "../../components/ErrorScreen";
import LoadingScreen from "../../components/LoadingScreen";

// Local types
type PokemonListItemProps = {
  pokemonName: string;
  pokemonNumber: number;
  pokemonImage: string;
  pokemonTypeNames: string[];
};

type PokemonListProps = {
  pokemonListItemPropsList: (PokemonListItemProps | null)[];
};

type ShowMoreBtnProps = {
  someQueryIsLoading: boolean;
  fetchNextPokemonNamedAPIResourceListPage: (
    options?: FetchNextPageOptions,
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<NamedAPIResourceList, unknown>,
      Error
    >
  >;
};

const PokemonListItem = ({
  pokemonName,
  pokemonNumber,
  pokemonImage,
  pokemonTypeNames,
}: PokemonListItemProps) => {
  const bgColor = defineBgColorByPokemonTypeName(pokemonTypeNames[0]);

  return (
    <li
      className={`min-w-56 flex-1 rounded-2xl shadow-md shadow-black/20 transition-transform hover:scale-105 ${bgColor}`}
    >
      <Link
        className="flex h-full flex-col items-center justify-between p-4"
        to={`/pokedex/${pokemonName}`}
      >
        <PokemonNumber pokemonNumber={pokemonNumber} className="text-lg" />
        <span className="text-balance text-center text-xl">{pokemonName}</span>
        <ImageWithContainer
          className="aspect-square w-full"
          src={pokemonImage}
          alt="Pokemon image"
        />
        <PokemonTypeNameList pokemonTypeNames={pokemonTypeNames} />
      </Link>
    </li>
  );
};

const PokemonList = ({ pokemonListItemPropsList }: PokemonListProps) => {
  const pokemonListItems = pokemonListItemPropsList.map(
    (pokemonListItemProps, index) =>
      pokemonListItemProps && (
        <PokemonListItem key={index} {...pokemonListItemProps} />
      ),
  );

  return (
    <ul className="flex max-w-[61rem] flex-wrap gap-4 rounded-3xl bg-white p-4 shadow-md shadow-black/20">
      {pokemonListItems}
    </ul>
  );
};

const ShowMoreBtn = ({
  someQueryIsLoading,
  fetchNextPokemonNamedAPIResourceListPage,
}: ShowMoreBtnProps) => {
  const className = someQueryIsLoading
    ? "py-1 text-2xl"
    : "rounded-full bg-white px-3 py-1 text-2xl text-rose-600 shadow-md shadow-black/20 hover:cursor-pointer";

  const value = someQueryIsLoading ? "Loading..." : "Show More";

  const handleClick = () => {
    fetchNextPokemonNamedAPIResourceListPage();
  };

  return (
    <input
      className={className}
      type="button"
      value={value}
      disabled={someQueryIsLoading}
      onClick={handleClick}
    />
  );
};

const PokedexPage = () => {
  const {
    someQueryIsError,
    pokemonNamedAPIResourceListInfiniteQueryIsLoading,
    pokemonListItemPropsList,
    hasNextPokemonNamedAPIResourceListPage,
    someQueryIsLoading,
    fetchNextPokemonNamedAPIResourceListPage,
  } = usePokedexPage();

  if (someQueryIsError) return <ErrorScreen />;
  if (pokemonNamedAPIResourceListInfiniteQueryIsLoading)
    return <LoadingScreen />;
  return (
    <main className="flex min-h-page min-w-80 flex-col items-center gap-8 px-8 py-14">
      <PokemonList pokemonListItemPropsList={pokemonListItemPropsList} />
      {hasNextPokemonNamedAPIResourceListPage && (
        <ShowMoreBtn
          someQueryIsLoading={someQueryIsLoading}
          fetchNextPokemonNamedAPIResourceListPage={
            fetchNextPokemonNamedAPIResourceListPage
          }
        />
      )}
    </main>
  );
};

export default PokedexPage;
