// src/config/navigation.ts

export const navigation = [
  {
    title: "Inicio",
    href: "/",
  },
  {
    title: "Sobre mí",
    href: "/sobre-mi",
  },
  {
    title: "Servicios",
    href: "/servicios",
    submenu: [
      { title: "Consulta individual", href: "/servicios/consulta-individual" },
      { title: "Programas online", href: "/servicios/programas" },
      { title: "Charlas y talleres", href: "/servicios/talleres" },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
    submenu: [
      { title: "Recetas", href: "/blog/recetas" },
      { title: "Consejos de alimentación", href: "/blog/consejos" },
      { title: "Entrevistas", href: "/blog/entrevistas" },
    ],
  },
  {
    title: "Contacto",
    href: "/contacto",
  },
];
