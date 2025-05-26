import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import HomePage from "./Pages/Homepage";
import Kontak from "./Pages/Kontak";
import AboutPage from "./Pages/AboutPage";
import Daftar from "./Pages/Daftar";
import Review from "./Pages/Review";



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route  path="/" element={<HomePage/>}/>
          <Route path="/kontak"   element={<Kontak/>} />
          <Route path="/aboutPage" element={<AboutPage/>} />
          <Route path="/daftar" element={<Daftar/>} />
          <Route path="/Review" element={<Review/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
