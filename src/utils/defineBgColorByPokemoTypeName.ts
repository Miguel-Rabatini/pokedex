const pokemonTypeBgColors = {
  normal: "bg-neutral-400",
  fire: "bg-red-600",
  fighting: "bg-orange-500",
  water: "bg-blue-600",
  flying: "bg-sky-400",
  grass: "bg-green-600",
  poison: "bg-purple-950",
  electric: "bg-yellow-400",
  ground: "bg-orange-950",
  psychic: "bg-pink-600",
  rock: "bg-stone-500",
  ice: "bg-cyan-400",
  bug: "bg-lime-600",
  dragon: "bg-indigo-600",
  ghost: "bg-fuchsia-950",
  dark: "bg-stone-800",
  steel: "bg-slate-400",
  fairy: "bg-pink-400",
};

const isPokemonTypeBgColorsKey = (
  pokemonTypeName: string,
): pokemonTypeName is keyof typeof pokemonTypeBgColors => {
  return pokemonTypeName in pokemonTypeBgColors;
};

const defineBgColorByPokemonTypeName = (pokemonTypeName: string) => {
  return isPokemonTypeBgColorsKey(pokemonTypeName)
    ? pokemonTypeBgColors[pokemonTypeName]
    : null;
};

export default defineBgColorByPokemonTypeName;
