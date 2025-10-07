import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About.tsx";
import Empresa from "./Empresa.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/empresa" element={<Empresa />} />
    </Routes>
  </BrowserRouter>
);
