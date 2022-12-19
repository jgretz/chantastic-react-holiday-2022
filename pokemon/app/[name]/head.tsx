import Image from "next/image";
import { fetchPokemonByName } from "../../services/pokemon";

interface Props {
  params: {
    name: string;
  };
}

export default async function Page({ params: { name } }: Props) {
  return (
    <>
      <title>Pokemon Christmas - {name}</title>
    </>
  );
}
