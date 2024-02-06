import "./globals.css";
import type { Metadata } from "next";
import { nunitoSans } from './fonts'
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FormDataProvider } from "./contexts/FormDataContext";

export const metadata: Metadata = {
  title: "Teste RD Station",
  description: "Teste RD Station",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FormDataProvider >
      <html lang="pt-br">
        <body className={`${nunitoSans.className} h-screen flex flex-col`}>
          <Header />
          <main className="flex-1 flex flex-col justify-center align-middle content-center bg-gradient-linear">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </FormDataProvider>
  );
}
