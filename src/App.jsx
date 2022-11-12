import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./pages/Nav";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Nav" element={<Nav />} />
      </Routes>
    </div>
  );
};

export default App;
