// src/components/layout/DoubleHeader.tsx
"use client";

import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const DoubleHeader = () => {
  return (
<div className="flex flex-wrap fixed top-0 left-0 w-full z-50 items-center justify-between gap-y-2 px-4 sm:px-8 py-2 text-xs sm:text-sm bg-gradient-to-r from-secondary to-primary text-white border-b border-gray-300">

        {/* Teléfono */}
      <div className="flex items-center gap-3">
        <FaPhone className="text-white text-lg" />
        <span className="cursor-default font-medium">643 914 336</span>
      </div>

      {/* Email y redes */}
      <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center sm:justify-end">
  {/* Email: oculto en móvil */}
  <div className="hidden sm:flex items-center gap-2 hover:text-gray-800 transition-colors">
    <FaEnvelope className="text-white text-lg" />
    <span className="cursor-default font-medium">elenap.nutricionista@gmail.com</span>
  </div>

  {/* Redes sociales */}
  <div className="flex gap-3 sm:gap-4 text-white">
    <Link href="https://api.whatsapp.com/send/?phone=34643914336" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
      <FaWhatsapp className="text-lg sm:text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="https://www.instagram.com/e.depetronila/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FaInstagram className="text-lg sm:text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="https://www.linkedin.com/in/elenadepetronila/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin className="text-lg sm:text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="https://www.youtube.com/channel/UCBzKEph8Jk8yHLtk3i159NA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <FaYoutube className="text-lg sm:text-xl hover:text-gray-800 transition-colors" />
    </Link>
    <Link href="https://www.tiktok.com/@e.depetronila" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
      <FaTiktok className="text-lg sm:text-xl hover:text-gray-800 transition-colors" />
    </Link>
  </div>
</div>
    </div>
  );
};

export default DoubleHeader;