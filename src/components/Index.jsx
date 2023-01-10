import React from 'react'
import '../styles/estilos.css'
import logo from '../assets/logo.jpg'
import karateAntiguo from '../assets/karateantiguo1.jpeg'
import equipazo from '../assets/equipazo.png'
import kanjiGi from '../assets/GI.png'
import kanjiRei from '../assets/REI.png'
import kanjiYu from '../assets/YU.png'
import kanjiJin from '../assets/JIN.png'
import kanjiMeiyo from '../assets/MEIYO.png'
import kanjiMakoto from '../assets/MAKOTO.png'
import kanjiChu from '../assets/CHU.png'

const style = {display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '25px'};
const style2 = {display: 'flex', justifyContent: 'center'};

function Index() {
  return (
  <div>

<div>
<br/>
<br/>
<div style={style}>
<img src={logo} alt=""/>
</div>
<br/>
<br/>

    <article>
      <hr/>
        <h2>Origenes del karate</h2>
        <hr/>
          <div className="fuente">El kárate tiene su origen durante el siglo XVI en las técnicas marciales nativas de las islas Ryukyu, (hoy día Okinawa) caracterizadas por el uso de los puños llamadas (Te / to-de / tuidi), además de técnicas provenientes de la lucha nativa o (tegumi); siendo influenciado por algunos estilos de las artes marciales chinas (kung-fu) y en menor medida por otras disciplinas provenientes de otros países del sureste asiático como Tailandia, Filipinas e Indonesia. Ya, en el siglo XX este estilo marcial fue influenciado en un principio por varios conceptos técnicos, tácticos y filosóficos procedentes de algunas de las artes marciales japonesas modernas, como: el kendo, el judo, y eventualmente el aikido. En un principio, El "Te" siendo el arte antecesor al karate moderno surgió de la necesidad de los guerreros nobles de la isla (los pechin) de proteger al último rey de Okinawa, Sho Tai, y a sí mismos de los varios abusos perpetrados por los guerreros con armadura (los samuráis), quienes hacían parte de los invasores japoneses pertenecientes al clan Satsuma, en el siglo XVII. Poco a poco, el "Te" fue desarrollado en el reino de Ryukyu, y posteriormente se expandió: se enseñó sistemáticamente en Japón después de la era Taisho en el siglo XX, donde fue renombrado como karate-Do, como consecuencia de los intercambios culturales entre los japoneses y los habitantes de las islas Ryukyu. Incorporándose así a la cultura de las artes marciales tradicionales del Japón o Budo.
        El karate-Do de hoy en día se caracteriza fundamentalmente por el empleo de golpes de puño, bloqueos, patadas y golpes de mano abierta, donde las diferentes técnicas reciben varios nombres, según la zona del cuerpo a defender o atacar. Sin embargo el karate, no restringe su repertorio solo a estos, ya que además incluye: varios barridos, algunos lanzamientos y derribos, unas pocas luxaciones articulares; además de golpes a puntos vulnerables, y a puntos nerviosos, en su currículo. En los golpes del karate-Do se unifican la fuerza, la rapidez, la respiración, el equilibrio, la tensión y la relajación al aplicar un correcto giro de cadera y una conexión o sinergia muy precisa de músculos y articulaciones, trasladando una gran parte del peso corporal y del centro de gravedad al impacto. Generalmente, y a diferencia de otras disciplinas, se busca derrotar al adversario mediante un impacto contundente (o unos pocos), preciso y definitivo, buscando ser lo más eficaz posible. A ese concepto se le llama "Ikken hissatsu" o "un golpe, una muerte", de forma semejante a la estocada o al corte de una katana o sable japonés. El karate-do parte de la idea de forjar el cuerpo como un arma, de tal forma que se pueda llegar a defenderse y sin sufrir mayor daño, de ahí que en las escuelas tradicionales se haga tanto ahínco en el endurecimiento físico, con combates a contacto pleno y sin ninguna protección, de esa forma se logra endurecer y potenciar la mayoría de partes del cuerpo a la vez que otorga al practicante un control de sus golpes y un conocimiento de sus habilidades y límites.
          </div>
    </article>
<br/>
<br/>
<div style={style2}>
<img src={karateAntiguo} alt="Karate antiguo"/>
</div>
<br/>
<br/>
    <article>
      <hr/>
      <h2>Beneficios del karate</h2>
      <hr/>
      <ol>
        <br/>
        <li className="lista_beneficios"><div className="beneficios" >Mejora la circulación de la sangre</div>
          La flexibilidad natural de los vasos sanguíneos va disminuyendo con el paso de los años. Sin embargo, la práctica del karate hará que ese síntoma se retrase y conseguirá que tengas un corazón más potente que pueda bombear mayores volúmenes de sangre.</li>
        <br/>
          <li className="lista_beneficios"><div className="beneficios">Tonificas tus músculos</div>
          La práctica del karate hará que estés trabajando constantemente los músculos de la espalda, los brazos y las piernas. Ganarás peso muscular y la tonificación de los mismos.</li>
        <br/>
          <li className="lista_beneficios"><div className="beneficios">Socializas</div>
          Una excelente forma de socializar con las personas es practicar diferentes deportes. El karate es un deporte que no se practica solo, por lo que podrás hacer nuevos amigos en tu grupo de trabajo.</li>
        <br/>
          <li className="lista_beneficios"><div className="beneficios">Mejoras tu concentración</div>
          Para realizar karate, cada una debe aprender y practicar los diferentes movimientos. Al momento de tener a otra persona adelante deberás concentrarte para saber qué maniobra realizar. </li>
        <br/>
          <li className="lista_beneficios"><div className="beneficios">La coordinación aumenta</div>
          Debido a que en el karate se utilizan las piernas y los brazos, tu coordinación entre ellos y tu cerebro será mucho mayor. Al principio puede costar, pero con la practica lograrás armonizar todos tus movimientos.</li>
        <br/>
          <li className="lista_beneficios"><div className="beneficios">Flexibilidad</div>
          Debido a los movimientos y estiramientos que se realizan en el karate, las diferentes articulaciones de tu cuerpo ganarán mucho en flexibilidad. Los músculos de tus piernas serán más elásticos y el grado de movimiento de las articulaciones será mayor.</li>
      </ol>
    </article>
<br/><br/>
    <div style={style2}>
      <img src={equipazo} alt="team"/>
      </div>

<br/><br/>

<br/><br/>
<br/><br/>
<hr/>
<h2>Virtudes del guerrero</h2>
<hr/>

<br/><br/>



<div className="wrapper">
<div className="content_img" id="item1">
  <img src={kanjiGi} width='100%' height='100%'/>
  <div>GI-JUSTICIA: Sólo existe lo correcto y lo incorrecto </div>
 </div>
 <div className="content_img" id="item2">
  <img src={kanjiRei} width='100%' height='100%'/>
  <div>REI-RESPETO: Un samurái es cortés incluso con sus enemigos </div>
 </div>
 <div className="content_img" id="item3">
  <img src={kanjiYu} width='100%' height='100%'/>
  <div>YU-VALOR: Un samurái debe tener valor heroico </div>
 </div>
 <div className="content_img" id="item4">
  <img src={kanjiJin} width='100%' height='100%'/>
  <div>JIN-COMPASION: Ayuda a sus compañeros en cualquier oportunidad </div>
 </div>
 <div className="content_img" id="item5">
  <img src={kanjiMeiyo} width='100%' height='100%'/>
  <div>MEYO-HONOR: El auténtico samurái sólo tiene un juez de su propio honor, y es él mismo </div>
 </div>
 <div className="content_img" id="item6">
  <img src={kanjiMakoto} width='100%' height='100%'/>
  <div>MAKOTO-SINCERIDAD: Cuando un samurái dice que hará algo, es como si ya estuviera hecho </div>
 </div>
 <div className="content_img" id="item7">
  <img src={kanjiChu} width='100%' height='100%'/>
  <div>CHUGI-LEALTAD: Para aquellos de los que es responsable, permanece fieramente fiel </div>
 </div>
</div>

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

</div>

    </div>
  )

  
}

export default Index