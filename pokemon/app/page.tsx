import Link from "next/link";
import { Pokemon } from "../types";

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const json = await response.json();

  return json.results as Pokemon[];
}

export default async function Home() {
  const pokemon = await fetchPokemon();

  return (
    <main>
      <ul>
        {pokemon.map((p) => (
          <li key={p.name}>
            <Link href={`/pokemon/${p.name}`}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
