import { nunitoSans, darkerGrotesque } from '../fonts'
interface TextComponentProps {
  text: string;
  type: 'heading-lg' | 'heading-md' | 'heading-sm' | 'heading-xs' | 'subtitle-sm' | 'subtitle-xs' | 'body-lg' | 'body-md' | 'body-sm';
  font?: 'nunitoSans' | 'darkerGrotesque'
}
export function TextComponent({ text, type, font }: TextComponentProps) {
  const fontClass = font === 'darkerGrotesque' ? darkerGrotesque.className : nunitoSans.className
  const fontType = type === 'heading-lg' ? `text-heading-md lg:text-heading-lg ${darkerGrotesque.className}` : type === 'heading-md' ?
    `text-heading-sm lg:text-heading-md ${darkerGrotesque.className}` : type === 'heading-sm' ? `text-heading-xs lg:text-heading-sm ${darkerGrotesque.className}` : type === 'heading-xs' ? `text-subtitle-sm lg:text-heading-xs ${darkerGrotesque.className}` : type === 'subtitle-sm' ? 'text-subtitle-xs md:text-subtitle-sm' : type === 'subtitle-xs' ? 'text-body-lg md:text-subtitle-xs' : type === 'body-lg' ? 'text-body-md md:text-body-lg' : type === 'body-md' ? 'text-base md:text-body-md' : 'text-base'
  return <p className={`${fontClass} ${fontType}`}>{text}</p>
}