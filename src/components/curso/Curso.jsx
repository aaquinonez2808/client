import React from "react";
import { NavLink } from "react-router-dom";

const Curso = ({curso}) => {
  return (
    <>
      <img src={curso.imagen} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{curso.nombre}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <NavLink to="/registro" target="_blank" className="btn btn-primary">
          Ir al Curso
        </NavLink>
      </div>
    </>
  );
};

export default Curso;
