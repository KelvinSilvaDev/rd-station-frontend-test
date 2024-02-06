import Image from "next/image"
import Logo from "../../assets/logo-rd-station-default.svg"
import { TextComponent } from "./TextComponent";
import { LinkComponent } from "./Link";

export function Header() {
  return (
    <header className="flex justify-between items-center, align-middle p-6 md:px-20 md:py-6">
      <LinkComponent href="/">
        <Image src={Logo} alt="Logo" width={100} height={100} />
      </LinkComponent>
      <TextComponent text="Gerador de Cartão de Visita" type="heading-xs" />
    </header>
  );
}