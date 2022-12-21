import { parseLimit, parseName } from "../../../services/util";
import { PageProps } from "../../../types";
import PokemonDetail from "./pokemon_detail";
import PokemonList from "./pokemon_list";

export default async function Page(props: PageProps) {
  const name = parseName(props);
  const limit = parseLimit(props);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10rem 1fr",
        padding: "2rem",
      }}
    >
      <aside>
        <PokemonList name={name} limit={limit} />
      </aside>
      <main>
        <PokemonDetail name={name} />
      </main>
    </div>
  );
}
