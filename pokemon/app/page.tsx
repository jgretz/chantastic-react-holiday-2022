import Link from "next/link";
import { fetchPokemonList } from "../services/pokemon";

export default async function Home() {
  const names = await fetchPokemonList();

  return (
    <main>
      <ul>
        {names.map((name) => (
          <li key={name}>
            <Link href={`/pokemon/${name}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
