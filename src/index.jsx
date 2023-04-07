import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

const App = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

createRoot(document.getElementById("root")).render(<App />);
