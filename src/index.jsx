import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.scss";

import Navigation from "../src/Components/Navigation/Navigation";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Chat from "./Components/Chat/Chat";

const App = () => {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
        <Chat />
      </div>
    </Router>
  );
};

createRoot(document.getElementById("root")).render(<App />);
