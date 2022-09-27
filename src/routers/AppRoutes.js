import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import NosotrosPage from "../pages/NosotrosPage";
import ContactoPage from "../pages/ContactoPage";
import { Navbar } from "../components/navbar/Navbar";
import { NavbarRedes } from "../components/navbar/NavbarRedes";
import CategoriasPage from "../pages/CategoriasPage";
import CursosPage from "../pages/CursosPage";
export const AppRoutes = () => {
  return (
    <>
      <NavbarRedes />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/categorias" element={<CategoriasPage />} />
        <Route path="/categorias/:id/cursos" element={<CursosPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </>
  );
};
