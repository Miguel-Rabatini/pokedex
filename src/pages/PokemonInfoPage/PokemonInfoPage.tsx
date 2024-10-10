// Hooks
import usePokemonInfoPage from "./hooks/usePokemonInfoPage";

// Store
import { PokemonInfoArticleDataProvider } from "./contexts/PokemonInfoArticleContext";

// Components
import ErrorScreen from "../../components/ErrorScreen";
import LoadingScreen from "../../components/LoadingScreen";
import PokedexLink from "../../components/PokedexLink";
import PokemonInfoArticle from "./PokemonInfoArticle";

const PokemonInfoPage = () => {
  const {
    pokemonQueryIsError,
    pokemonQueryIsLoading,
    pokemonInfoArticleContextValue,
  } = usePokemonInfoPage();

  if (pokemonQueryIsError) return <ErrorScreen />;
  if (pokemonQueryIsLoading) return <LoadingScreen />;
  return (
    <main className="min-w-80d flex min-h-page flex-col items-center gap-8 px-4 py-14">
      <PokedexLink />
      {pokemonInfoArticleContextValue && (
        <PokemonInfoArticleDataProvider value={pokemonInfoArticleContextValue}>
          <PokemonInfoArticle />
        </PokemonInfoArticleDataProvider>
      )}
    </main>
  );
};

export default PokemonInfoPage;
