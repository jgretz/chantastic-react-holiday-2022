import { Pokemon } from "../../types";

type ResponseObject = {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_shiny: string;
  };
  species: {
    name: string;
  };
};

export async function fetchPokemonByName(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  if (response.status !== 200) {
    return null;
  }

  const json = (await response.json()) as ResponseObject;

  return {
    name: json.name,
    height: json.height,
    weight: json.weight,
    image: json.sprites.front_shiny,
    species: {
      name: json.species.name,
    },
  } as Pokemon;
}
