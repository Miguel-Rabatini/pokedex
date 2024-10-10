// react-router-dom
import { Link } from "react-router-dom";

const PokedexLink = () => {
  return (
    <Link
      className="grid h-8 w-56 place-items-center rounded-full bg-white text-xl text-rose-600 shadow-md shadow-black/20"
      to="/pokedex"
    >
      Return to Pokedex
    </Link>
  );
};

export default PokedexLink;
