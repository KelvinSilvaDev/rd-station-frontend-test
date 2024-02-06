import { TextComponent } from "./TextComponent";

export function Footer() {
  return (
    <footer className="flex justify-center items-center py-6 gap-1 text-color-gray-70">
      <a href="https://legal.rdstation.com/pt/privacy-policy/" className="font-bold underline"><TextComponent text="Política de Privacidade" type="body-sm"/></a><TextComponent text="© 2023 Resultados Digitais" type="body-sm"/>
    </footer>
  );
}