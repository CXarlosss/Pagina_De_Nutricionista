"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactoPage() {
  return (
    <main className="bg-white px-6 py-20 text-gray-900"> {/* Eliminado dark:bg-zinc-950 y dark:text-white */}
      {/* No Hero Section */}

      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2"> {/* Removed items-start to allow items to stretch */}
        {/* Bloque de Imagen + Mensaje + Enlaces de Contacto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-blue-50 to-purple-50 p-8 shadow-xl border border-primary/20 flex flex-col items-center text-center md:items-start md:text-left" // Eliminado dark:from-zinc-800 y dark:to-zinc-900
        >
          <Image
            src="/images/Nutricionista.jpg"
            alt="Elena de Petronila"
            width={160} // Adjusted size for visual balance
            height={160} // Adjusted size for visual balance
            className="mx-auto mb-6 rounded-3xl shadow-xl border-6 border-secondary" // Stronger border, secondary color
          />
          <h2 className="text-primary mb-4 text-2xl font-bold sm:text-3xl"> {/* Adjusted font size */}
            ¿Estás lista para cuidarte de verdad?
          </h2>
          <p className="text-sm text-gray-700 mb-6"> {/* Eliminado dark:text-gray-300 y adjusted font size */}
            No tienes que hacerlo sola. Estoy aquí para ayudarte a reconectar
            con tu cuerpo, tu energía y tu bienestar.
          </p>

          <div className="mt-6 space-y-3 w-full">
            <Link
              href="https://api.whatsapp.com/send/?phone=34643914336"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 text-primary text-sm font-semibold transition-colors w-full bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-lg shadow-sm" // Adjusted font size
            >
              <FaWhatsapp className="text-lg" /> Escríbeme por WhatsApp {/* Adjusted icon size */}
            </Link>
            <Link
              href="mailto:elenap.nutricionista@gmail.com"
              className="inline-flex items-center justify-center gap-2 text-primary text-sm font-semibold transition-colors w-full bg-primary/10 hover:bg-primary hover:text-white p-3 rounded-lg shadow-sm" // Adjusted font size
            >
              <FaEnvelope className="text-lg" /> elenap.nutricionista@gmail.com {/* Adjusted icon size */}
            </Link>
          </div>
        </motion.div>

        {/* Formulario (ContactForm component) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}