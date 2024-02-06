import Link from "next/link";
import { TextComponent } from "./TextComponent";

export function LinkComponent({
  text,
  href,
  className,
  children,
  target
}: Readonly<{
  text?: string;
  href: string;
  target?: string;
  className?: string;
  children?: React.ReactNode;
}>) {
  return (
    <Link href={href} target={target} >
        {text ? <TextComponent text={text} type="body-sm" className={className} /> : null}
        {children}
    </Link>
  );
}