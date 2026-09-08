import type { Metadata } from "next";
import "../index.css";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Alves Advocacia",
  description:
    "Escritório de Advocacia conduzida com rigor técnico e discrição desde 2024. Garanhuns PE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link rel="icon" href="/logos/alves-advocacia-logo-transparente.png" />
      </head>
      <body className="min-h-svh bg-ink text-bone antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
