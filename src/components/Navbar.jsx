import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styles/estilos.css'

function Navbar() {
  return (
    <div>
                <nav className="navbar navbar-expand-lg bg-light" id="navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Dojo Cobra Kai</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <NavLink className="nav-link active" to="/NuestroDojo">Nuestro dojo</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link active" to="/Sensei">Nuestros sensei</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link active" to="/Productos">Productos</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link active" to="/Formulario">Inscribite</NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink className="nav-link active" to="/Alumnos">Alumnos</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
    </div>
  )
}

export default Navbar


