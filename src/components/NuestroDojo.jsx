import React from 'react'
import '../styles/estilos.css'
import claseJoven from '../assets/cobra en clase joven.jpg'
import clase from '../assets/cobra en clase.jpg'
import dojo from '../assets/dojo.jpg'

function NuestroDojo() {
  return (
    <div>
        
<br/>
<br/>
<br/>
<br/>
<br/>

<h4 style={{textAlign:'center'}} className='fuente'>Ubicado en pleno centro de union city, nuestro dojo cuenta con el mejor equipamento para que puedas realizar tu entrenamiento </h4>
<br/><br/>
{/* Carrusel */}
      
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" style={{height: '900px'}}>
      <img src={claseJoven} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" style={{height: '900px'}}>
      <img src={clase} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" style={{height: '900px'}}>
      <img src={dojo} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
{/* Carrusel */}

<br/><br/><br/><br/>

<div style={{display: 'flex', justifyContent: 'center'}}>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4701.760098950027!2d-84.58129933689285!3d33.56256109898942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4e37dff6defcd%3A0xae053f860c90cf7d!2sUnion%20City%2C%20Georgia%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1663508251325!5m2!1ses-419!2sar" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<br/><br/>
<div style={{display: 'flex', justifyContent: 'center'}}>
  <p style={{color: 'red'}}> Dirección: Greene street 451 - Union city
    Teléfonos: (800) 275-8777
    E-mail: info@Cobrakai.com
  </p>

</div>
</div>
  )
}

export default NuestroDojo;