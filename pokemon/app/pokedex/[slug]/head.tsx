import { parseName } from "../../../services/util";
import { PageProps } from "../../../types";

export default async function Page(props: PageProps) {
  const name = parseName(props);

  return (
    <>
      <title>Pokemon Christmas - {name}</title>
    </>
  );
}
