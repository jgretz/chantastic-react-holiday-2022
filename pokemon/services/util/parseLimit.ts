import { PageProps } from "../../types";

export function parseLimit({ searchParams }: PageProps) {
  if (!searchParams || typeof searchParams.limit !== "string") {
    return 20;
  }

  return parseInt(searchParams.limit, 10);
}
