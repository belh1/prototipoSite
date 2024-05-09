import React, { useRef, useEffect, useState } from "react";
import '../estilo/cabecalho.css'; 
import logo from '../img/logoP.png';

const Cabecalho = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null);
    const inicioRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const clicar = (e, path, section) => {
        e.preventDefault();
        const elementoAlvo = document.querySelector(path);
    
        if (elementoAlvo) {
            const local = elementoAlvo.offsetTop;
    
            window.scrollTo({
                left: 0,
                top: local - 80,
                behavior: 'smooth'
            });
        }
        setMenuOpen(false);
        setActiveSection(section);
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const nav_links = [
        { path: "#inicio", display: "Inicio", section: "inicio" },
        { path: "#ajuda", display: "Ajuda", section: "ajuda" },
        { path: "#contato", display: "Contato", section: "contato" },
    ];
    
    return (
        <header className={scrollPosition > 80 ? "cabecalho cabecalho-opaco" : "cabecalho"} ref={inicioRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="Logo" /> 
                        </div>
                    </div>

                    <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
                        <span className="menu-icon"></span>
                    </button>

                    <div className={`navigation ${menuOpen ? 'open' : ''}`}>
                        <ul className="menu">
                            {nav_links.map(item => (
                                <li className={`nav__item ${activeSection === item.section ? 'active' : ''}`} key={item.display}>
                                    <a href={item.path} onClick={(e) => clicar(e, item.path, item.section)}>
                                        {item.display}
                                        <span className="underline"></span> {/* Risco azul */}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Cabecalho;
