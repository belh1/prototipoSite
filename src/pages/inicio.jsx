import React from "react";
import pcImg from "../img/telaHome.png";
import logoD from "../img/LogoD.png";
import "../estilo/inicio.css";
const Inicio = () => {
  return (
    <section id="inicio">
       
      <div className="container">
        <div className="navh__wrapper">
          <div className="logo">
            <div className="logo__imgT">
              <img src={pcImg} alt="PCImage" />
            </div>
            <div className="logo__imgD">
              <img src={logoD} alt="logoD" />
            </div>
            <div className="text">
              <h2 className="ditis">DITIS</h2>
              <div className="departamento">
                <h3>DEPARTAMENTO DE INFORMAÇÃO,</h3>
                <h4>TECNOLOGIA E INOVAÇÃO EM SAÚDE</h4>
              </div>
              {/* Adicionando um botão */}
              <a
                href="#ajuda"
                className="btn"
                onClick={() => {
                  document.getElementById("chamados").click();
                  document.getElementById("ajuda").scrollIntoView();
                }}
              >
                Abrir Chamado
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inicio;
