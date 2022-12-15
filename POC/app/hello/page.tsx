type JokeResult = {
  category: string;
  joke: string;
};

const JOKE_API = "https://v2.jokeapi.dev/joke/Any?type=single";

export default async function Hello() {
  const req = await fetch(JOKE_API);
  const result = (await req.json()) as JokeResult;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <div>{result.joke}</div>;
}
