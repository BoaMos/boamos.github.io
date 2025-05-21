import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaCertificate } from "react-icons/fa"; // Using react-icons for logos

const Footer = ({ isLightMode }) => {
  return (
    <footer
      className={`py-4 px-6 ${
        isLightMode ? "bg-white text-black" : "bg-black text-green-300 glow"
      }`}
    >
      <div className="container mx-auto flex flex-col items-center sm:flex-row justify-between">
        <p className="text-sm mb-4 sm:mb-0">
          © {new Date().getFullYear()} Boago Mosidila. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a
            href="https://www.github.com/BoaMos/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${
              isLightMode ? "text-gray-700" : "text-green-400"
            } transition-colors duration-300`}
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/boagomosidila/"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${
              isLightMode ? "text-gray-700" : "text-green-400"
            } transition-colors duration-300`}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://x.com/boago_mos"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${
              isLightMode ? "text-gray-700" : "text-green-400"
            } transition-colors duration-300`}
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.credly.com/users/boago-mos"
            target="_blank"
            rel="noopener noreferrer"
            className={`hover:${
              isLightMode ? "text-gray-700" : "text-green-400"
            } transition-colors duration-300`}
          >
            <FaCertificate size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;