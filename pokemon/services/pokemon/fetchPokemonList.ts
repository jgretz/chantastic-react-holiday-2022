type RequestObject = {
  limit?: number;
  offset?: number;
};

type ResponseObject = {
  count: number;
  results: {
    name: string;
  }[];
};

export async function fetchPokemonList(query?: RequestObject) {
  const { limit = 20, offset = 0 } = query || {};

  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const json = (await response.json()) as ResponseObject;

  return json.results.map((x) => x.name);
}
