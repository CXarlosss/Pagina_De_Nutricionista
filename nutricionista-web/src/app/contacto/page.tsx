import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactoPage() {
  return (
    <main className="py-20 px-6 bg-white dark:bg-zinc-950 text-gray-900 dark:text-white">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Hablemos</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Si tienes dudas, quieres empezar un proceso o simplemente saludar, estaré encantada de leerte.
        </p>
      </div>
      <ContactForm />
    </main>
  );
}
