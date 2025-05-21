import React, { useState } from "react";

const App = ({ children }) => {

  return (
    <div className={isLightMode ? "bg-white text-black" : "bg-black text-white"}>
      <header className="p-4 shadow-md">
        
      </header>
      <main className="p-6">{children}</main>
    </div>
  );
};

export default App;