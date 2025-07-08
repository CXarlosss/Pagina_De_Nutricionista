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
<div className="hidden sm:flex fixed top-0 left-0 w-full z-50 justify-between items-center px-8 py-3 text-sm
  border-gray-200 bg-white dark:text-gray-700 dark:bg-white-200 backdrop-blur-lg shadow-xl border-b dark:text-gray-400transition-colors duration-300">


      {/* Teléfono */}
      <div className="flex items-center gap-3">
        <FaPhone className="text-primary text-lg" />
        <span className="cursor-default font-medium">643 914 336</span>
      </div>

      {/* Email y redes */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-primary text-lg" />
          <span className="cursor-default font-medium">elenap.nutricionista@gmail.com</span>
        </div>

        <div className="flex gap-4 text-gray-600 dark:text-gray-700">
          <Link href="https://api.whatsapp.com/send/?phone=34643914336" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-xl hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.instagram.com/e.depetronila/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-xl hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/elenadepetronila/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-xl hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.youtube.com/channel/UCBzKEph8Jk8yHLtk3i159NA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <FaYoutube className="text-xl hover:text-primary transition-colors" />
          </Link>
          <Link href="https://www.tiktok.com/@e.depetronila" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <FaTiktok className="text-xl hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoubleHeader;
