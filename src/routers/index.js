import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

export const IndexRoutes = () => {
  return (
    <>
        <Routes>
        <Route path="/*" element={<AppRoutes />} />
        <Route path="/register" element={<div>Inscribirse a curso</div>} />
      </Routes>
    </>
  )
}
