import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BotonWhatsApp from "../components/BotonWhatsApp"; // <-- Importamos el botón

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AllToys | Juguetes y Diversión",
  description: "El mejor catálogo de juguetes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <Header />
        
        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        
        <Footer />
        
        {/* Botón flotante de WhatsApp */}
        <BotonWhatsApp /> 
      </body>
    </html>
  );
}