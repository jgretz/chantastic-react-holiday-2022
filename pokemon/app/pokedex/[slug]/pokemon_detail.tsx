import Image from "next/image";
import { notFound } from "next/navigation";
import { fetchPokemonByName } from "../../../services/pokemon";
import styles from "./pokemon.module.css";

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
      <section className={styles.header}>
        <h1 className={styles.headerName}>{name}</h1>
        <div className={styles.headerTypeContainer}>
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
        </div>
      </section>
    </>
  );
}
