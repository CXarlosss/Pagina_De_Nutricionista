"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// FaCheckCircle is no longer needed as "Mi enfoque" section is removed
// import { FaCheckCircle } from "react-icons/fa";
// podcastPosts is no longer needed as "Último lanzamiento" is removed
// import { podcastPosts } from "@/data/podcasts"; 

// Mock data for blog posts to display in "Publicaciones, tips y muchos más" section
const blogPosts = [
  {
    title: "Pierde peso y gana salud: Guía práctica para una dieta sana y ejercicio efectivo",
    href: "/blog/articulos/guia-perder-peso", // Hypothetical slug
  },
  {
    title: "Nutrición y Salud Mental: La Conexión entre la Dieta y el Bienestar Emocional",
    href: "/blog/articulos/nutricion-salud-mental", // Hypothetical slug
  },
  {
    title: "Consejos para Comer Saludable en un Mundo Ajetreado",
    href: "/blog/articulos/comer-saludable-mundo-ajetreado", // Hypothetical slug
  },
  {
    title: "Cómo Leer Etiquetas Nutricionales de Forma Efectiva",
    href: "/blog/articulos/leer-etiquetas-nutricionales", // Hypothetical slug
  },
  {
    title: "Guía para Principiantes en Nutrición: Comer saludable sin complicaciones",
    href: "/blog/articulos/guia-principiantes-nutricion", // Hypothetical slug
  },
  {
    title: "Los Beneficios de una Dieta Equilibrada",
    href: "/blog/articulos/beneficios-dieta-equilibrada", // Hypothetical slug
  },
];

export default function SobreMiPage() {
  // latestPodcastEpisode is no longer needed as "Último lanzamiento" is removed
  // const latestPodcastEpisode = podcastPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  return (
    <main className="bg-white dark:bg-zinc-950 text-gray-900 dark:text-white">
      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-zinc-800 dark:to-zinc-900 rounded-b-xl shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white"
        >
          Mucho gusto,<br />
          soy <span className="text-primary">Elena De Petronila</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-4 max-w-2xl mx-auto text-sm text-gray-700 dark:text-gray-300"
        >
          Nutricionista especializada en psiconutrición, salud femenina y bienestar real. Ayudo a mujeres a liberarse de la culpa, reencontrarse con su cuerpo y disfrutar de comer.
        </motion.p>
      </section>

      {/* Imagen + texto (¿Quién soy?) */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/* Foto con estilo de borde y animación */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-primary/50 hover:border-primary transition-all duration-300"
            >
              <Image
                src="/images/Nutricionista.jpg"
                alt="Foto de la nutricionista Elena De Petronila"
                width={400}
                height={400}
                className="object-cover w-full h-auto max-w-sm md:max-w-md"
              />
            </motion.div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">¿Quién soy?</h2>
            
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
              Soy Elena, me gradué en 2020 en la Universidad Autónoma de Madrid en el Grado de Nutrición Humana y Dietética y bueno como soy un poco culo inquieto seguí estudiando las disciplinas que más interés me despertaban, ampliando mis conocimientos en el mundo deportivo y la mejora del rendimiento, la alimentación vegetariana y vegana, y el mundo de la disfagia y la malnutrición asociada a la tercera edad.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
              A raíz de la pandemia hubo un aumento de los casos de ansiedad y con ello la sensación de perdida de control con la comida, también comemos más deprisa, sin escuchar las señales de hambre y saciedad que nos manda nuestro cuerpo y muchas veces acabamos comiendo cantidades excesivas acompañados de culpa, y autorreproche. Por ello, decidí ampliar mis conocimientos en este área con cursos de mindfulness y gestion de las emociones.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
              En 2021 me lancé a trabajar como autónoma y actualmente trabajo como nutricionista dietista en La Clínica Sastre (desde 2021) , Clínica Aurea (desde 2021), con equipos multidisciplinares increíbles y haciendo lo que más me gusta que es ayudar a la gente.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300 mb-4">
              No hace falta que diga que me encanta el mundo de la nutrición y tras este último año viendo casos y casos de nutrición clínica decidí hacer el Master en Nutrición Clinica Aplicada en Aleris Academia, para mejorar el servicio que ofrezco.
            </p>
            <p className="text-xs text-gray-600 dark:text-gray-300">
              Algunas otras cosillas más personales son que me encanta el ejercicio fisico, sentirme más fuerte y capaz de superarme cada día, soy una apasionada del mundo de la psicología y el autoconocimiento y bueno también tengo un Podcast dónde me podeis escuchar un poquito más dar mi punto de vista de la alimentación y la salud en general con mi compañera de profesión y aventuras Beatriz Rodríguez en “Partiendo el Koko”.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sección: ¿Cómo que un Podcast? */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#ffb4b9] to-[#ffcdb2] dark:from-zinc-800 dark:to-zinc-900">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/* Texto del Podcast (izquierda) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              ¿Cómo que un <span className="text-primary">Podcast</span>?
            </h2>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
              En 2022 decidimos empezar este proyecto Beatriz Rodríguez, que puedes encontrar en redes como @partiendoelkoko y yo, para dar apoyo, información y nuestro punto de vista de la alimentación, la nutrición y la salud en general, tocando temas como la obesidad, los trastornos de la conducta alimentaria, la alimentación sostenible, como crear hábitos… Siempre con nuestro toque de lo que nosotras llamamos humor y desde la cercanía, como si estuviéramos en un bar un viernes noche.
            </p>
          </motion.div>

          {/* Imagen del Podcast (derecha) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/Partiendo-el-koko.png" // Placeholder image for podcast section
              alt="Portada del Podcast Partiendo el KOKO"
              width={300}
              height={300}
              className="rounded-2xl shadow-xl object-cover border border-primary/20"
            />
          </motion.div>
        </div>
      </section>

      {/* Sección: Instagram y Tiktok */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-center">
          {/* Texto de Instagram y Tiktok (izquierda) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              <span className="text-primary">Instagram</span> y <span className="text-secondary">TikTok</span>
            </h2>
            <p className="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
              Otra de las cosas que ya te he contado que me definen, son el hecho que me encanta comer sano, sabroso y saludable. Cuando era pequeña siempre había admirado esos platos coloridos donde mezclar frutas con verduras de todos los colores, platos que mezclan sabores dulces con salados llenos de color y sabor y siempre he querido plasmarlo en mis platos. Además soy alguien que no tiene tanto tiempo pero que el poco que tengo lo invierto en que mis platos sean nutritivos, coloridos y sobre todo, apetecibles y llenos de sabor. Por eso en mis redes sociales intento ayudaros a poder tener estos platos en vuestra mesa de forma muy muy sencilla.
              Otras de mis pasiones es demostrarme a mi misma que me puedo superar, que puedo ser más ágil, mas flexible, más fuerte y quiero que más gente pueda sentir en sus propias carnes esa sensación con el ejercicio físico y que al final del día se sientan orgullosos de ellos mismos y del progreso, empeño y dedicación que le ponen a ser cada día mejores desde la salud física.
            </p>
          </motion.div>

          {/* Imagen de Instagram/TikTok (derecha) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Image
              src="/images/Fondo1.jpg" // Placeholder image for Instagram/TikTok section
              alt="Contenido de Instagram y TikTok"
              width={300}
              height={300}
              className="rounded-2xl shadow-xl object-cover border border-primary/20"
            />
          </motion.div>
        </div>
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            href="https://www.instagram.com/e.depetronila/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary/80 transition-all"
          >
            Ver mi perfil de Instagram →
          </Link>
        </motion.div>
      </section>


      {/* Sección: Publicaciones, tips y muchos más */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-zinc-800 dark:to-zinc-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-12 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Publicaciones, <span className="text-primary">tips</span> y mucho más
          </motion.h2>
          <motion.p
            className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Buscas inspiración para llevar un estilo de vida más saludable? ¡No busques más! Sigue mi blog para descubrir una variedad de entradas llenas de recetas saludables, consejos de bienestar y trucos para mantener un equilibrio en tu vida. Juntos, exploraremos el camino hacia un mejor tú. ¡Únete a la comunidad de bienestar! 🌱💪
          </motion.p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-zinc-900 border border-primary/20 rounded-xl shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:border-primary"
                whileHover={{ y: -5 }} // Added lift on hover
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white text-left">{post.title}</h3>
                <Link
                  href={post.href}
                  className="text-primary text-sm font-semibold hover:underline mt-auto inline-block text-left"
                >
                  Leer más →
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link
              href="/blog" // Link to the main blog page
              className="inline-block bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:bg-primary/80 transition-all"
            >
              Ver todo el blog →
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
