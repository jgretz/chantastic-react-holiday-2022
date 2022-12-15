import { notFound } from "next/navigation";

type User = {
  name: string;
};

const API = "https://httpstat.us/404";

async function fetchUser(id?: number) {
  const response = await fetch(API);

  if (!response.ok) {
    return undefined;
  }

  return (await response.json()) as User;
}

export default async function Page() {
  let user = await fetchUser();

  if (!user) {
    notFound();
  }

  return <div>{user.name}</div>;
}
