// src/app/layout.tsx
import "@/styles/globals.css";
import  Navbar  from "../components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Elena de Petronila | Nutricionista",
  description: "Nutrición real para una vida real. Consulta online y presencial.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={GeistSans.variable}>
<body className="pt-[72px] bg-white text-gray-900 dark:bg-neutral-950 dark:text-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem enableColorScheme>
          <Navbar />
          <main className="min-h-[80vh] px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
