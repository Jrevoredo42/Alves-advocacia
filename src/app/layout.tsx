import type { Metadata } from "next";
import "../index.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Alves Advocacia | Direito Empresarial & Contencioso",
  description:
    "Advocacia empresarial e contenciosa conduzida com rigor técnico e discrição desde 1998. São Paulo - SP.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="min-h-svh bg-ink text-bone antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
