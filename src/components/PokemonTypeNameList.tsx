// Utils
import defineBgColorByPokemonTypeName from "../utils/defineBgColorByPokemoTypeName";

// Local types
type PokemonTypeNameListItemProps = {
  pokemonTypeName: string;
};

type PokemonTypeNameListProps = {
  pokemonTypeNames: string[];
};

const PokemonTypeNameListItem = ({
  pokemonTypeName,
}: PokemonTypeNameListItemProps) => {
  const bgColor = defineBgColorByPokemonTypeName(pokemonTypeName);

  return (
    <li
      className={`w-20 rounded-full p-1 text-center text-sm shadow-md shadow-black/20 ${bgColor}`}
    >
      {pokemonTypeName}
    </li>
  );
};

const PokemonTypeNameList = ({
  pokemonTypeNames,
}: PokemonTypeNameListProps) => {
  const pokemonTypeNameListItems = pokemonTypeNames.map(
    (pokemonTypeName, index) => (
      <PokemonTypeNameListItem key={index} pokemonTypeName={pokemonTypeName} />
    ),
  );

  return (
    <ul className="flex justify-center gap-8">{pokemonTypeNameListItems}</ul>
  );
};

export default PokemonTypeNameList;
