type StatResult = {
  name: string;
};

const API = "https://httpstat.us/500";

export default async function Test() {
  const req = await fetch(API);
  const result = (await req.json()) as StatResult;

  return <div>{result.name}</div>;
}
