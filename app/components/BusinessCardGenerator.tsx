'use client'
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextComponent } from "./TextComponent"
import Image from 'next/image'
import formImg from '../../assets/landingpage.png'
import { Button } from "./Button";
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useFormData } from '../contexts/FormDataContext';



const phoneRegex = /^\(\d{2}\) \d{4,5}-\d{4}$/;


const formSchema = z.object({
  nome: z.string().min(2, 'O nome deve ter pelo menos dois caracteres'),
  email: z.string().email('O email deve ser um endereço de email válido'),
  telefone: z.string().regex(phoneRegex, 'O telefone deve ser um número válido e o valor inserido foi: ')
});



type FormValues = z.infer<typeof formSchema>;

export function BusinessCardGenerator() {

  const { formData, setFormData } = useFormData();
  
  const { register, handleSubmit, getValues, setValue, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    shouldUnregister: true
  });
  
  const handleKeyUp = useCallback((e:React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.maxLength = 15;
    let value = e.currentTarget.value;
    if (!/\(\d{2}\) \d{1} \d{4}-\d{4}/.test(value)) {
      value = value.replace(/\D/g, "");
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d)(\d{4})$/, "$1-$2");
      
      setValue('telefone', value);
    }
    
    e.currentTarget.value = value;
  },[setValue])
  
  
  const onSubmit = (data: FormValues) => {
    setFormData(data);
    console.log(formData)
  };


  return (
    <div className="flex flex-col justify-center gap-10 py-[3.375rem] lg:py-0 w-full max-w-7xl mx-auto">
      <div className="flex flex-col gap-4 justify-center content-center items-center max-w-4xl text-center mx-auto">
        <TextComponent text="Gerador de Cartão de Visita" type="heading-md" className="text-white" />
        <TextComponent text="Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais." type="subtitle-xs" className="text-white" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 w-full">
        <Image src={formImg} alt="Business Card" width={471} />
        <div className="flex flex-col max-w-xl">
          <form onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-4 gap-6">
            <label htmlFor="name" className="col-span-4 w-full flex flex-col" >
              <TextComponent text="Nome*" type="body-sm" className="text-white" />
              <input {...register('nome')} type="text" placeholder="nome@email.com" className="py-2 px-3" />
              {errors.nome && errors.nome.message && <p>{errors.nome.message}</p>}

            </label>
            <label htmlFor="telefone" className="col-span-4 lg:col-span-2 flex flex-col">
              <TextComponent text="Telefone*" type="body-sm" className="text-white" />
              <input {...register('telefone')} onKeyUp={handleKeyUp} type="text" placeholder="(00) 0 0000-0000"  className="py-2 px-3" />
              {errors.telefone && errors.telefone.message && <p>{errors.telefone.message} {getValues(["telefone"])}</p>}
            </label>
            <label htmlFor="email" className="col-span-4 lg:col-span-2 flex flex-col">
              <TextComponent text="E-mail*" type="body-sm" className="text-white" />
              <input {...register('email')} type="email" placeholder="email.@email.com" className="py-2 px-3" />
              {errors.email && <p>{errors.email.message}</p>}
            </label>
            <Button text="GERAR CARTÃO GRÁTIS →" type='submit' variant="primary" enabled={true} className="col-span-4 " />
          </form>

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