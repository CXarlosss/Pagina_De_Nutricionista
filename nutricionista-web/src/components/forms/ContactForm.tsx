"use client";

import { motion } from "framer-motion";

export const ContactForm = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto text-gray-800"> {/* Eliminado dark:text-white */}
      <motion.div
        className="w-full max-w-2xl mx-auto p-8 rounded-lg shadow-xl border border-primary/20 bg-gradient-to-br from-blue-50 to-purple-50" /* Eliminado dark:from-zinc-800 dark:to-zinc-900 */
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900"> {/* Eliminado dark:text-white */}
          Envía tu mensaje
        </h2>

        <form
          action="https://formspree.io/f/mgvygljg"
          method="POST"
          className="space-y-6"
        >
          <div>
            <label htmlFor="nombre" className="block mb-2 font-semibold text-sm text-gray-700"> {/* Eliminado dark:text-gray-300 */}
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              required
              className="w-full rounded-lg border border-primary/20 p-3 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" /* Eliminado dark:bg-zinc-800 dark:text-white */
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold text-sm text-gray-700"> {/* Eliminado dark:text-gray-300 */}
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full rounded-lg border border-primary/20 p-3 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" /* Eliminado dark:bg-zinc-800 dark:text-white */
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block mb-2 font-semibold text-sm text-gray-700"> {/* Eliminado dark:text-gray-300 */}
              Mensaje
            </label>
            <textarea
              name="mensaje"
              id="mensaje"
              rows={5}
              required
              className="w-full rounded-lg border border-primary/20 p-3 bg-white text-gray-900 focus:ring-2 focus:ring-primary focus:border-transparent transition-all" /* Eliminado dark:bg-zinc-800 dark:text-white */
            ></textarea>
          </div>

          <div className="flex justify-center">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-full bg-primary px-10 py-5 text-lg font-semibold text-white shadow-xl transition hover:bg-primary/80"
            >
              Enviar mensaje
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};