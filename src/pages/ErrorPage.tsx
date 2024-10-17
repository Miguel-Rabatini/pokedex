// react-router-dom
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// Components
import PokedexLink from "../components/PokedexLink";

const ErrorPage = () => {
  const routeError = useRouteError();

  const routeErrorIs404NotFound = () => {
    return isRouteErrorResponse(routeError) && routeError.status === 404;
  };

  const errorMessage = routeErrorIs404NotFound()
    ? `404 Not Found`
    : "An error ocurred. Please, try again later.";

  return (
    <main className="flex h-screen min-h-80 min-w-80 flex-col items-center justify-evenly px-4 text-center text-xl">
      {errorMessage}
      {routeErrorIs404NotFound() && <PokedexLink />}
    </main>
  );
};

export default ErrorPage;
