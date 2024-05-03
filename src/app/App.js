import React, { useState } from "react";
import MenuOverlay from "./MenuOverlay";

const App = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsNavbarOpen(!isNavbarOpen)}>Toggle Navbar</button>
      {isNavbarOpen && <MenuOverlay links={yourLinksArray} onClose={closeNavbar} />}
    </div>
  );
};

export default App;
