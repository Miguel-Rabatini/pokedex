// react
import { createContext, ReactNode, useContext } from "react";

// Types
import { PokemonStatListItemProps } from "../types";

// Local types
type PokemonInfoArticleDataContextType = {
  pokemonNumber: number;
  pokemonName: string;
  pokemonImage: string;
  pokemonStatListItemPropsList: PokemonStatListItemProps[];
  pokemonTypeNames: string[];
  pokemonHeight: number;
  pokemonWeight: number;
  pokemonSpeciesName: string;
  pokemonAbilityNames: string[];
};

type PokemonInfoArticleDataProviderProps = {
  value: PokemonInfoArticleDataContextType;
  children: ReactNode;
};

const PokemonInfoArticleDataContext =
  createContext<PokemonInfoArticleDataContextType | null>(null);

export const PokemonInfoArticleDataProvider = ({
  value,
  children,
}: PokemonInfoArticleDataProviderProps) => {
  return (
    <PokemonInfoArticleDataContext.Provider value={value}>
      {children}
    </PokemonInfoArticleDataContext.Provider>
  );
};

export const usePokemonInfoArticleData = () => {
  const context = useContext(PokemonInfoArticleDataContext);
  if (!context)
    throw new Error(
      "usePokemonInfoArticleData must be used within a PokemonInfoArticleDataProvider"
    );
  return context;
};
