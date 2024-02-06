'use client'
import Image from "next/image";
import { ChevronLeft } from 'lucide-react';
import { TextComponent } from "./TextComponent";
import { useFormData } from "../contexts/FormDataContext";
import { LinkComponent } from "./Link";
import formImg from "../../assets/landingpage.png";
import Logo from "../../assets/symbol-rd-station-default.svg";
import { Button } from "./Button";

export function BusinessCardGenerated() {
  const { formData } = useFormData();
  console.log(formData);
  return (
    <div className="flex flex-col justify-center gap-10 py-[3.375rem] lg:py-0 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 justify-center content-center items-center max-w-4xl text-center mx-auto">
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
        <Image src={formImg} alt="Business Card" width={471} className="hidden md:block" />
        <div className="flex flex-col max-w-xl gap-4">
          <div className="flex gap-2 items-center">
            <ChevronLeft size={20} className="text-white" />
            <LinkComponent text="Gerar outro cartão" href="/" className="text-white" />
          </div>
          <div className="flex bg-color-white rounded-3xl p-4 md:py-8 md:px-[72px]">
            <Image src={Logo} alt="Business Card" width={70} />
            <div className="h-[183px] mx-4 md:mx-5 w-[1px] bg-[#d8d9fd]" />
            <div className="flex flex-col gap-6 justify-center">
              <TextComponent text={formData.nome} type="body-sm" />
              <TextComponent text={formData.telefone} type="body-sm" />
              <TextComponent text={formData.email} type="body-sm" />
            </div>
          </div>
          <Button text=" ↓ BAIXAR CARTÃO" className="w-full" enabled={false} variant={"primary"} type={"button"} />
          <a href="https://app.rdstation.com.br/signup" target="__blank" className="flex gap-[3px] md:gap-2 px-10">
            <TextComponent text="FAZER UM TESTE GRÁSTIS DO RD STATION MARKETING" type="body-md" className="text-color-white text-center font-extrabold" />
            <TextComponent text="→" type="body-md" className="text-color-white" />
          </a>
        </div>
      </div>
    </div>
  );
}