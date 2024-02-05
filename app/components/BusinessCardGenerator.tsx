import { TextComponent } from "./TextComponent"
import Image from 'next/image'
import formImg from '../../assets/landingpage.png'
import { Button } from "./Button";

export function BusinessCardGenerator() {
  return (
    <div className="flex flex-col justify-center gap-10 py-[3.375rem] lg:py-0 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 justify-center content-center items-center max-w-4xl text-center mx-auto">
        <TextComponent text="Gerador de Cartão de Visita" type="heading-md" className="text-white" />
        <TextComponent text="Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais." type="subtitle-xs" className="text-white" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
        <Image src={formImg} alt="Business Card" width={471} />
        <div className="flex flex-col max-w-xl">
          <div className=" grid grid-cols-4 gap-6">
            <label htmlFor="name" className="col-span-4 w-full flex flex-col" >
              <TextComponent text="Nome*" type="body-sm" className="text-white" />
              <input type="text" placeholder="nome@email.com" className="py-2 px-3" />
            </label>
            <label htmlFor="phone" className="col-span-4 lg:col-span-2 flex flex-col">
              <TextComponent text="Telefone*" type="body-sm" className="text-white" />
              <input type="tel" placeholder="(00) 0 0000-0000" className="py-2 px-3" />
            </label>
            <label htmlFor="email" className="col-span-4 lg:col-span-2 flex flex-col">
              <TextComponent text="E-mail*" type="body-sm" className="text-white" />
              <input type="email" placeholder="email.@email.com" className="py-2 px-3" />
            </label>
            <Button text="GERAR CARTÃO GRÁTIS -->" type="primary" enabled={true} className="col-span-4 " />
          </div>
          <div className="pt-8 flex flex-col justify-between h-full gap-8">
            <div className="px-6">
              <ul className="marker:text-white list-disc -pl-2">
                <li><TextComponent text="Ao preencher o formulário, concordo * em receber comunicações de acordo com meus interesses." type="body-sm" className="text-color-gray-30" /> </li>
                <li><TextComponent text="Ao informar meus dados, eu concordo com a Política de privacidade." type="body-sm" className="text-color-gray-30" /></li>
              </ul>
            </div>
            <TextComponent text="* Você pode alterar suas permissões de comunicação a qualquer tempo." type="body-sm" className="text-color-gray-30 text-left" />
          </div>
        </div>
      </div>
    </div>
  );
}