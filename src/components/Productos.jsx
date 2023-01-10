import React from 'react'
import '../styles/estilos.css'
import producto1 from '../assets/655adf24941a0a11003932f3d7c49de64087dbb3a3f521e15510b8858d1b43d15395.png'
import producto2 from '../assets/remeras2021-91-41f766f8e1b5c1c00516104088555720-640-0.jpg'
import producto3 from '../assets/cobra-kai-frente1-8d6c06890db9d95f5815264342790118-1024-1024.jpg'
import producto4 from '../assets/D_NQ_NP_2X_624710-MLM44949092769_022021-F.webp'
import producto5 from '../assets/D_NQ_NP_2X_746031-MLM44949088815_022021-F.webp'
import producto6 from '../assets/cobra-kai1-269243395edc3f517b16008834503736-640-0.jpg'

function Productos() {
  return (
    <div>
        <br/><br/>
  <div className="text-center m-5">
    <hr />
    <h1>
      Productos
    </h1>
    <hr />
  </div>

  <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="4"
        aria-label="Slide 5"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="5"
        aria-label="Slide 6"
      ></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={producto1} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: 'blue'}}>Karategui masculino</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src={producto2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: 'blue'}}>Taza Cobra Kai</h5>
        </div>
      </div>
          <div className="carousel-item">
        <img src={producto3} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: 'blue'}}>Remera femenina</h5>
        </div>
      </div>
          <div className="carousel-item">
        <img src={producto4} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: 'blue'}}>Karategui unisex</h5>
        </div>
      </div>
      <div className="carousel-item">
        <img src={producto5} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: 'blue'}}>Karategui unisex</h5>
        </div>
      </div>
          <div className="carousel-item">
        <img src={producto6} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
          <h5 style={{color: 'blue'}}>Remera masculina</h5>
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
    </div>

  </div>
  )
}

export default Productos;