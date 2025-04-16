import React from "react";

const Header = () => {
  return (
    <header className="bg-black py-4 px-6 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Sticky Name Section */}
        <div className="sticky top-0 bg-black z-50 py-2 px-4">
          <h1 className="text-3xl font-bold text-green-400 glow">Boago Mosidila</h1>
        </div>

        {/* Other Header Content */}
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <p className="text-green-300">+267 76476746</p>
          <p className="text-green-400">
            <a
              href="mailto:bmosidila@gmail.com"
              className="hover:text-green-500 transition-colors duration-300"
            >
              bmosidila@gmail.com
            </a>
          </p>
          <p className="text-green-300">Francistown, Botswana</p>
          <p className="text-green-400">
            <a
              href="https://www.linkedin.com/in/boagomosidila"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition-colors duration-300"
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