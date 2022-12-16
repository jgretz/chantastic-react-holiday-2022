interface Props {
  params: {
    name: string;
  };
}

export default async function Page({ params: { name } }: Props) {
  return <h1>{name}</h1>;
}
