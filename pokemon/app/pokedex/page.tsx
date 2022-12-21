import { parseLimit, parseName } from "../../services/util";
import { PageProps } from "../../types";
import PokemonList from "./[slug]/pokemon_list";

export default async function Page(props: PageProps) {
  const name = parseName(props);
  const limit = parseLimit(props);

  return (
    <aside>
      <PokemonList name={name} limit={limit} />
    </aside>
  );
}
