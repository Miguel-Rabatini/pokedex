// react
import { ReactNode } from "react";

// Types
import { PokemonStatListItemProps } from "./types";

// Utils
import defineBgColorByPokemonTypeName from "../../utils/defineBgColorByPokemoTypeName";

// Contexts
import { usePokemonInfoArticleData } from "./contexts/PokemonInfoArticleContext";

// Components
import PokemonNumber from "../../components/PokemonNumber";
import ImageWithContainer from "../../components/ImageWithContainer";
import PokemonTypeNameList from "../../components/PokemonTypeNameList";

// Local types
type TitledContainerProps = {
  title: string;
  children: ReactNode;
};

const PokemonName = () => {
  const { pokemonName } = usePokemonInfoArticleData();

  return (
    <span className="text-balance text-center text-2xl">{pokemonName}</span>
  );
};

const PokemonIdentification = () => {
  const { pokemonNumber } = usePokemonInfoArticleData();

  return (
    <h1 className="flex flex-col items-center">
      <PokemonNumber pokemonNumber={pokemonNumber} className="text-xl" />{" "}
      <PokemonName />
    </h1>
  );
};

const TitledContainer = ({ title, children }: TitledContainerProps) => {
  return (
    <section className="flex flex-col items-center gap-4 text-lg">
      <h2 className="text-xl">{title}</h2>
      {children}
    </section>
  );
};

const PokemonStatListItem = ({
  pokemonStatName,
  pokemonStatValue,
}: PokemonStatListItemProps) => {
  return (
    <li>
      {pokemonStatName}: {pokemonStatValue}
    </li>
  );
};

const PokemonStatList = () => {
  const { pokemonStatListItemPropsList } = usePokemonInfoArticleData();

  const pokemonStatListItems = pokemonStatListItemPropsList.map(
    (pokemonStatListItemProps, index) => (
      <PokemonStatListItem key={index} {...pokemonStatListItemProps} />
    ),
  );

  return <ul>{pokemonStatListItems}</ul>;
};

const PokemonStatListSection = () => {
  return (
    <TitledContainer title="Stats">
      <PokemonStatList />
    </TitledContainer>
  );
};

const PokemonImageAndStatListSection = () => {
  const { pokemonImage } = usePokemonInfoArticleData();

  return (
    <section className="flex flex-wrap items-start justify-center gap-8">
      <ImageWithContainer
        src={pokemonImage}
        alt="Pokemon image"
        className="aspect-square w-56"
      />
      <PokemonStatListSection />
    </section>
  );
};

const PokemonTypeNameListSection = () => {
  const { pokemonTypeNames } = usePokemonInfoArticleData();

  return (
    <TitledContainer title="Type">
      <PokemonTypeNameList pokemonTypeNames={pokemonTypeNames} />
    </TitledContainer>
  );
};

const PokemonHeightSpan = () => {
  const { pokemonHeight } = usePokemonInfoArticleData();

  return <span>Height: {pokemonHeight}dm</span>;
};

const PokemonWeightSpan = () => {
  const { pokemonWeight } = usePokemonInfoArticleData();

  return <span>Weight: {pokemonWeight}hg</span>;
};

const PokemonPhysiqueInfoSection = () => {
  return (
    <TitledContainer title="Physique">
      <div className="flex flex-col items-center">
        <PokemonHeightSpan />
        <PokemonWeightSpan />
      </div>
    </TitledContainer>
  );
};

const PokemonSpeciesNameSection = () => {
  const { pokemonSpeciesName } = usePokemonInfoArticleData();

  return (
    <TitledContainer title="Species">{pokemonSpeciesName}</TitledContainer>
  );
};

const PokemonAbilityNameList = () => {
  const { pokemonAbilityNames } = usePokemonInfoArticleData();

  const pokemonAbilityNameListItems = pokemonAbilityNames.map(
    (pokemonAbilityName, index) => <li key={index}>{pokemonAbilityName}</li>,
  );

  return (
    <ul className="flex flex-col items-center">
      {pokemonAbilityNameListItems}
    </ul>
  );
};

const PokemonAbilityNameListSection = () => {
  return (
    <TitledContainer title="Abilities">
      <PokemonAbilityNameList />
    </TitledContainer>
  );
};

const PokemonOtherInfoSection = () => {
  return (
    <section className="flex flex-wrap items-start justify-center gap-6">
      <PokemonTypeNameListSection />
      <PokemonPhysiqueInfoSection />
      <PokemonSpeciesNameSection />
      <PokemonAbilityNameListSection />
    </section>
  );
};

const PokemonInfoSection = () => {
  return (
    <section className="flex flex-col items-center gap-8">
      <PokemonImageAndStatListSection />
      <PokemonOtherInfoSection />
    </section>
  );
};

const PokemonInfoArticle = () => {
  const { pokemonTypeNames } = usePokemonInfoArticleData();

  const bgColor = defineBgColorByPokemonTypeName(pokemonTypeNames[0]);

  return (
    <article
      className={`flex min-w-72 flex-col items-center gap-8 rounded-3xl p-4 shadow-md shadow-black/20 ${bgColor}`}
    >
      <PokemonIdentification />
      <PokemonInfoSection />
    </article>
  );
};

export default PokemonInfoArticle;
