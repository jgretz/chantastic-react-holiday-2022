import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPokemonByName } from "../../../services/pokemon";

interface Props {
  name?: string;
}

export default async function PokemonDetail({ name }: Props) {
  if (!name) {
    return <></>;
  }

  const pokemon = await fetchPokemonByName(name);
  if (!pokemon) {
    return notFound();
  }

  return (
    <>
      <h1>{name}</h1>
      <Image
        src={pokemon.image}
        alt={`Image for ${name}`}
        width={96}
        height={96}
      />
      <div>
        <p>Height {pokemon.height}</p>
        <p>Weight {pokemon.weight}</p>
      </div>
      <div>Species: {pokemon.species.name}</div>
    </>
  );
}
