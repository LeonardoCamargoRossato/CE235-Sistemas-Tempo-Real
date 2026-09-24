import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { links } from "../data/links";
import { assets } from "../data/assets";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <header className="navbar navbar--institutional">
        <div className="container navbar__inner">
          <NavLink className="brand brand--ita" to="/" onClick={close}>
            <img src={assets.itaLogo} alt="Instituto Tecnológico de Aeronáutica — ITA" />
            <span>
              <strong>CE-235</strong>
              <small>Sistemas de Tempo Real</small>
            </span>
          </NavLink>

          <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Abrir menu">
            {open ? <X /> : <Menu />}
          </button>

          <nav className={`nav-links ${open ? "is-open" : ""}`}>
            <NavLink to="/" onClick={close}>Início</NavLink>
            <NavLink to="/disciplina" onClick={close}>Disciplina</NavLink>
            <NavLink to="/listas" onClick={close}>Listas</NavLink>
            <NavLink to="/projeto" onClick={close}>Projeto SPRB-TR/BD</NavLink>
            <NavLink to="/sprint1" onClick={close}>Sprint 1</NavLink>
            <NavLink to="/scade" onClick={close}>SCADE</NavLink>
            <NavLink to="/artefatos" onClick={close}>Artefatos</NavLink>
            <a href={links.portfolio} target="_blank" rel="noopener noreferrer" onClick={close}>About ↗</a>
          </nav>
        </div>
      </header>
      <div className="institutional-rule"><i /><i /><i /></div>
    </>
  );
}
