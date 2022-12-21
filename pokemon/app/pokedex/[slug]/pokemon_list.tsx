import Link from "next/link";
import { fetchPokemonList } from "../../../services/pokemon";
import { PageProps } from "../../../types";

interface Props {
  name: string;
  limit: number;
}

function buildLink(name: string, limit: number) {
  return `/pokedex/${name}?limit=${limit}`;
}

export default async function PokemonList({ name, limit }: Props) {
  const names = await fetchPokemonList({ limit });

  return (
    <>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <Link href={buildLink(name, limit)}>{name}</Link>
          </li>
        ))}
      </ul>

      <Link href={buildLink(name, limit + 20)}>Load More ...</Link>
    </>
  );
}
