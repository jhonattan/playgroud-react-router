import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login.tsx";
import Games from "./Games.tsx";
import Companies from "./Companies.tsx";
import Error from "./Error.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/games" element={<Games />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
