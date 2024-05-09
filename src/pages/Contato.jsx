import React, { useEffect } from "react";
import fone from "../img/fone.png";
import Dlogo from "../img/LogoD.png";
import hora from "../img/hora.png";
import local from "../img/local.png";
import "../estilo/contato.css";
import Aos from "aos";
import whats from "../img/whatsApp.png"

const Contato = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section id="contato">
      <div className="contato_container" data-aos="zoom-in" data-aos-duration="500">
        <div className="primeira_parte">
          <div className="Contato__logo">
            <img src={Dlogo} alt="logoditis" />
            <h2 className="title">Ditis</h2>
          </div>
          <div className="informacoes_contato">
            <div className="vertical-line"></div>
            <div className="Contatos ">
              <img className="iconC" src={fone} alt="fone" />
              <p>(42) 3142-1527</p>
              <div className="hora">
                Horario: Segunda a Sexta das 08:00-17:00.
                <img className="iconH" src={hora} alt="hora" />
              </div>
              <div className="local">
                <img className="iconL" src={local} alt="local" />
                <p3>Endereço: Rua Vicente Machado, 1895 - Centro, Guarapuava - PR, 85010-260</p3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Botão flutuante do WhatsApp */}
      <div className="whatsapp-btn">
        <a href="https://wa.me/4231421527?&text=Ol%C3%A1%2C+preciso+de+suporte" target="_blank" rel="noopener noreferrer">
          <img src={whats}  alt="WhatsApp" />
        </a>
      </div>
    </section>
  );
};

export default Contato;
