import Link from "next/link";
import { fetchPokemonList } from "../../services/pokemon";

export default async function PokemonList() {
  const names = await fetchPokemonList();

  return (
    <>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <Link href={`/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
