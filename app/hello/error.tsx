"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ErrorPage({ error, reset }: Props) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <p>Something went wrong</p>
      <button onClick={() => reset()}>Reset Error Boundary</button>
    </>
  );
}
