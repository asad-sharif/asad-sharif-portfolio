import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800 py-4 px-6 text-neutral-400">

      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 text-center sm:text-left">
        
        {/* Left Section: Name */}
        <p className="text-xl font-semibold text-white">Asad Sharif</p>

        {/* Right Section: Social Links */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          
          {/* Social Media Links with Icons */}
          <a href="https://wa.me/00923009628704" 
            className="flex items-center gap-2 hover:text-white transition duration-200 ease-in-out"
            target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp className="text-xl" /> WhatsApp
          </a>

          <a href="https://www.linkedin.com/in/asad--sharif/" 
            className="flex items-center gap-2 hover:text-white transition duration-200 ease-in-out"
            target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-xl" /> LinkedIn
          </a>

          <a href="https://github.com/asad-sharif" 
            className="flex items-center gap-2 hover:text-white transition duration-200 ease-in-out"
            target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-xl" /> GitHub
          </a>

          <a href="/resume.pdf" 
            className="flex items-center gap-2 hover:text-white transition duration-200 ease-in-out"
            target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <FaFilePdf className="text-xl" /> Resume
          </a>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
