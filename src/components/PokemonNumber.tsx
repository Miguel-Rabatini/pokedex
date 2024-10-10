// Local types
type PokemonNumberProps = {
  pokemonNumber: number;
  className?: string;
};

const PokemonNumber = ({ pokemonNumber, className }: PokemonNumberProps) => {
  const formattedPokemonNumber = pokemonNumber.toString().padStart(4, "0");

  return <span className={className}>Nº {formattedPokemonNumber}</span>;
};

export default PokemonNumber;
