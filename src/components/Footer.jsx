import React from "react";
import '../styles/estilos.css'

function Footer() {
  return (
    <footer className="text-center text-white" style={{backgroundColor: '#f1f1f1'}}>
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.facebook.com/CobraKaiSeries"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://twitter.com/CobraKaiSeries?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-link btn-floating btn-lg text-dark m-1"
            href="https://www.instagram.com/cobrakaiseries/?hl=es"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </section>
      </div>

      <div  className="text-center text-dark p-3"  style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
        © 2022 Copyright:
        <a className="text-dark" href="mailto:rodrigo695@hotmail.com">
          rodrigo695@hotmail.com{" "}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
