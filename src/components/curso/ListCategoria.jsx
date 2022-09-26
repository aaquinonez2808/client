import React from 'react'
import { NavLink } from 'react-router-dom'
import {categorias} from './datosCategoria'

const ListCategoria = () => {
// const {categorias } = useCategoria() // useCategoria() este hook se encuentra en src\hooks\useCategoria.js y se usa para obtener los datos de la API REST de categorias descomentar esta linea para usar el hook y comentar la linea 3
  return (
    <>
        <ul className='list'>
            {categorias.map((categoria) => (
                <li key={categoria.id}>
                    <div className='card mb-3 p-5'>
                        <h3>{categoria.nombre}</h3>
                        <p>{categoria.descripcion}</p>
                        <NavLink className="btn btn-primary d-block w-25" to={'/cursos'}>
                            Ver cursos
                        </NavLink>
                    </div>
                </li>
            ))}
        </ul>
    </>
  )
}

export default ListCategoria