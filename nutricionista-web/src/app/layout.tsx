// src/app/layout.tsx
import "@/styles/globals.css";
import DoubleHeader from "../components/layout/DoubleHeader";
import Navbar from "../components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Elena de Petronila | Nutricionista",
  description:
    "Nutrición real para una vida real. Consulta online y presencial.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className={GeistSans.variable}>
      <body className="bg-white pt-[100px] text-gray-900"> {/* Este padding-top es crucial y ya está bien */}
        <DoubleHeader />
        <Navbar />
        <main className="mx-auto min-h-[80vh] max-w-7xl px-4 sm:px-6 md:px-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}