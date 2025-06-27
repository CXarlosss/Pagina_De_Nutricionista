"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviado:", formData);
    // Aquí podrías conectar con una API, Mailjet, Formspree, etc.
  };

  return (
    <motion.section
      className="w-full max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        Hablemos ✉️
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="nombre" className="block mb-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
            Nombre
          </label>
          <input
            type="text"
            name="nombre"
            id="nombre"
            required
            value={formData.nombre}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="block mb-2 font-semibold text-sm text-gray-700 dark:text-gray-300">
            Mensaje
          </label>
          <textarea
            name="mensaje"
            id="mensaje"
            rows={5}
            required
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
          ></textarea>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-full bg-primary px-6 py-3 text-white font-semibold shadow-md transition hover:bg-primary/80"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </motion.section>
  );
};
