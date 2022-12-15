"use client";

type Props = {
  error: Error;
};

export default function ErrorPage({ error }: Props) {
  return (
    <>
      <p>Something went wrong</p>
      <pre>{error.message}</pre>
    </>
  );
}
