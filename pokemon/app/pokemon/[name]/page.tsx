import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPokemonByName } from "../../../services/pokemon";

interface Props {
  params: {
    name: string;
  };
}

export default async function Page({ params: { name } }: Props) {
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
