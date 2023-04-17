import React from "react";
import { createRoot } from "react-dom/client";
import AppCart from "./appCart";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppCart />
  </React.StrictMode>
);