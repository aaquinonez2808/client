import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {HomePage} from '../pages/HomePage'
import CursosPage from '../pages/CursosPage'
import NosotrosPage from '../pages/NosotrosPage'
import ContactoPage from '../pages/ContactoPage'
import { Navbar } from '../components/navbar/Navbar'
import { NavbarRedes } from '../components/navbar/NavbarRedes'
import CategoriasPage from '../pages/CategoriasPage'
export const AppRoutes = () => {
  return (
    <>
        <NavbarRedes />
        <Navbar/>

        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nosotros" element={<NosotrosPage />} />
        <Route path="/cursos" element={<CategoriasPage />} />
        <Route path="/contacto" element={<ContactoPage />} />
      </Routes>
    </>
  )
}
