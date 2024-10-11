// react-router-dom
import { createBrowserRouter, Navigate } from "react-router-dom";

// Components
import App from "../App";

// Pages
import ErrorPage from "../pages/ErrorPage";
import PokemonInfoPage from "../pages/PokemonInfoPage";
import PokedexPage from "../pages/PokedexPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="pokedex" /> },
      { path: "pokedex/:pokemonName", element: <PokemonInfoPage /> },
      { path: "pokedex", element: <PokedexPage /> },
    ],
  },
]);

export default router;
