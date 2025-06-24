// src/app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nutricionista Web",
  description: "Web profesional de nutrición y salud integrativa",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <ThemeProvider>
          <Navbar />
          <main className="flex flex-col items-center justify-center">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

