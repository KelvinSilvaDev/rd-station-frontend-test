import "./globals.css";
import type { Metadata } from "next";
import {nunitoSans} from './fonts'

export const metadata: Metadata = {
  title: "Teste RD Station",
  description: "Teste RD Station",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={nunitoSans.className}>{children}</body>
    </html>
  );
}
