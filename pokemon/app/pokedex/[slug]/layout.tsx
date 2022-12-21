import { LayoutProps } from "../../../types/index";

export default async function PokemonLayout({ children }: LayoutProps) {
  return <main>{children}</main>;
}
