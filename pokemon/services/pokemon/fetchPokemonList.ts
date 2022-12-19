type ResponseObject = {
  count: number;
  results: {
    name: string;
  }[];
};

export async function fetchPokemonList(limit = 20, offset = 0) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const json = (await response.json()) as ResponseObject;

  return json.results.map((x) => x.name);
}
