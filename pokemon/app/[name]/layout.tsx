import PokemonList from "../(shared)/pokemon_list";

export default async function PokemonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "10rem 1fr",
        padding: "2rem",
      }}
    >
      <aside>
        <PokemonList />
      </aside>

      <div>{children}</div>
    </div>
  );
}
