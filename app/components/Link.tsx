import Link from "next/link";
import { TextComponent } from "./TextComponent";

export function LinkComponent({
  text,
  href,
  className,
  children
}: Readonly<{
  text?: string;
  href: string;
  className?: string;
  children?: React.ReactNode;
}>) {
  return (
    <Link href={href}>
        {text ? <TextComponent text={text} type="body-sm" className={className} /> : null}
        {children}
    </Link>
  );
}