import React from 'react'
import '../styles/estilos.css'
import kreese from '../assets/John_Kreese_Young.webp'
import johnny from '../assets/johnny.jpg'
import silver from '../assets/silver.jpg'

function Sensei() {
  return (
    <div>

      <br/>
      <br/>
      <br/>
      <br/>

      <article>
          <hr/>
        <h2>Sensei John Kreese</h2>
          <hr/>
        <div style={{display: 'flex'}}>
          <img src={kreese} alt="" className="foto__equipo"/>

          <p style={{justifyContent: 'left', fontSize: '2em', padding: '25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nisi eveniet doloremque ipsa dicta! Porro non nam nostrum, aspernatur dolor sequi asperiores itaque adipisci, repudiandae fuga incidunt vero deserunt iste.
          Alias fuga rerum, animi expedita ident dolor architecto perspiciatis dicta, voluptate sapiente laudantium iusto impedit nemo explicabo vel illo officiis quis tempora. Excepturi ab vitae iure tenetur quia natus, non sed?</p>
        </div>
      </article>



      <article>
          <hr/>
        <h2>Sensei Terry Silver</h2>
          <hr/>
        <div style={{display: 'flex'}}>
          <img src={silver} alt="" className="foto__equipo"/>

          <p style={{justifyContent: 'left', fontSize: '2em', padding: '25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nisi eveniet doloremque ipsa dicta! Porro non nam nostrum, aspernatur dolor sequi asperiores itaque adipisci, repudiandae fuga incidunt vero deserunt iste.
          Alias fuga rerum, animi expedita ident dolor architecto perspiciatis dicta, voluptate sapiente laudantium iusto impedit nemo explicabo vel illo officiis quis tempora. Excepturi ab vitae iure tenetur quia natus, non sed?</p>
        </div>
      </article>



      <article>
          <hr/>
        <h2>Sensei Johnny Lawrence</h2>
          <hr/>
        <div style={{display: 'flex'}}>
        <img src={johnny} alt="" className="foto__equipo"/>

          <p style={{justifyContent: 'left', fontSize: '2em', padding: '25px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic nisi eveniet doloremque ipsa dicta! Porro non nam nostrum, aspernatur dolor sequi asperiores itaque adipisci, repudiandae fuga incidunt vero deserunt iste.
          Alias fuga rerum, animi expedita ident dolor architecto perspiciatis dicta, voluptate sapiente laudantium iusto impedit nemo explicabo vel illo officiis quis tempora. Excepturi ab vitae iure tenetur quia natus, non sed?</p>
        </div>
      </article>



      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}

export default Sensei