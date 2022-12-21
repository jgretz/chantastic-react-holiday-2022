import { PageProps } from "../../types";

export function parseName({ params }: PageProps) {
  return params?.slug || "";
}
