import Image from "next/image"
import Logo from "../../assets/logo-rd-station-default.svg"
import { TextComponent } from "./TextComponent";

export function Header() {
  return (
    <header className="flex justify-between items-center, align-middle px-20 py-6">
      <Image src={Logo} alt="Logo" width={100} height={100} />
      <TextComponent text="Gerador de Cartão de Visita" type="heading-xs" />
    </header>
  );
}