"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactoPage() {
  return (
    <main className="bg-white px-6 py-20 text-gray-900 dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        {/* Imagen + mensaje */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl bg-zinc-50 p-6 shadow-md dark:bg-zinc-900"
        >
          <Image
            src="/images/Nutricionista.jpg"
            alt="Elena de Petronila"
            width={200}
            height={200}
            className="mx-auto mb-6 rounded-3xl shadow-xl md:mx-0"
          />
          <h2 className="text-primary mb-4 text-3xl font-bold sm:text-4xl">
            ¿Estás lista para cuidarte de verdad?
          </h2>
          <p className="text-base text-gray-700 dark:text-gray-300">
            No tienes que hacerlo sola. Estoy aquí para ayudarte a reconectar
            con tu cuerpo, tu energía y tu bienestar.
          </p>

         <div className="mt-6 space-y-2">
  <Link
    href="https://api.whatsapp.com/send/?phone=34643914336"
    target="_blank"
    className="text-primary inline-flex items-center gap-2 text-sm hover:underline"
  >
    <FaWhatsapp /> Escríbeme por WhatsApp
  </Link>
<br />
  <Link
    href="mailto:elenap.nutricionista@gmail.com"
    className="text-primary inline-flex items-center gap-2 text-sm hover:underline"
  >
    <FaEnvelope /> elenap.nutricionista@gmail.com
  </Link>
</div>

        </motion.div>

        {/* Formulario */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="mb-4 text-xl font-semibold">Cuéntame qué necesitas</h3>

          
          <ContactForm />
        </motion.div>
      </div>
    </main>
  );
}
