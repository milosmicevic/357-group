import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import Navigation from "../src/Components/Navigation/Navigation";
import Hero from "../src/Components/Hero/Hero";
import Contact from "../src/Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Chat from "./Components/Chat/Chat";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <Hero />
      <Contact />
      <Footer />
      <Chat />
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
