"use client";

import Link from "next/link";
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram, FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

const DoubleHeader = () => {
  return (
<div className="hidden sm:flex fixed top-0 left-0 w-full z-60 justify-between items-center px-6 py-2 text-sm bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 shadow-sm">
      
      {/* Teléfono */}
      <div className="flex items-center gap-2">
        <FaPhone className="text-primary" />
            <span className="cursor-default">643 914 336</span>
      </div>

      {/* Email y redes */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-primary" />
          <span className="cursor-default">elenap.nutricionista@gmail.com</span>
        </div>

        <div className="flex gap-3 text-gray-600 dark:text-gray-300">
          <Link href="https://api.whatsapp.com/send/?phone=34643914336" target="_blank"><FaWhatsapp /></Link>
          <Link href="https://www.instagram.com/e.depetronila/" target="_blank"><FaInstagram /></Link>
          <Link href="https://www.linkedin.com/in/elenadepetronila/" target="_blank"><FaLinkedin /></Link>
          <Link href="https://www.youtube.com/channel/UCBzKEph8Jk8yHLtk3i159NA" target="_blank"><FaYoutube /></Link>
          <Link href="https://www.tiktok.com/@e.depetronila" target="_blank"><FaTiktok /></Link>
        </div>
      </div>
    </div>
  );
};

export default DoubleHeader;
