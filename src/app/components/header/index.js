import React from "react";

const Header = ({ isLightMode,toggleTheme }) => {
  return (
    <header
      className={`py-4 px-6 shadow-md ${
        isLightMode ? "bg-white" : "bg-black"
      }`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Sticky Name Section */}
        <div
          className={`sticky top-0 z-50 py-2 px-4 ${
            isLightMode ? "bg-white" : "bg-black"
          }`}
        >
          <h1
            className={`text-3xl font-bold ${
              isLightMode ? "text-black" : "text-green-400 glow"
            }`}
          >
            Boago Mosidila
          </h1>
        </div>
        <div className="text-center py-4">
        <button
          className="px-4 py-2 border rounded text-sm"
          onClick={toggleTheme}
        >
          {isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
        </button>
      </div> 
        {/* Other Header Content */}
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <a
            className={`cursor-pointer ${
              isLightMode ? "text-black" : "text-green-300"
            }`}
            href="tel:+26776476746"
          >
            +267 76476746
          </a>
          <p
            className={`${
              isLightMode ? "text-black" : "text-green-400"
            }`}
          >
            <a
              href="mailto:bmosidila@gmail.com"
              className={`hover:${
                isLightMode ? "text-gray-700" : "text-green-500"
              } cursor-pointer transition-colors duration-300`}
            >
              bmosidila@gmail.com
            </a>
          </p>
          <p
            className={`${
              isLightMode ? "text-gray-700" : "text-green-300"
            }`}
          >
            Francistown, Botswana
          </p>
          <p
            className={`cursor-pointer ${
              isLightMode ? "text-black" : "text-green-400"
            }`}
          >
            <a
              href="https://www.linkedin.com/in/boagomosidila"
              target="_blank"
              rel="noopener noreferrer"
              className={`hover:${
                isLightMode ? "text-gray-700" : "text-green-500"
              } transition-colors duration-300`}
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;