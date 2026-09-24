import { links } from "../data/links";
import { assets } from "../data/assets";

export default function Footer() {
  return (
    <footer className="footer footer--institutional footer--us123">
      <div className="container footer__institutional">
        <div className="footer__identity">
          <img src={assets.itaLogo} alt="Instituto Tecnológico de Aeronáutica — ITA" />
          <div>
            <strong>Instituto Tecnológico de Aeronáutica — ITA</strong>
            <span>CE-235 — Sistemas Embarcados de Tempo Real</span>
            <span>Página Individual da Disciplina</span>
            <small>Material acadêmico desenvolvido no contexto da disciplina CE-235.</small>
          </div>
        </div>
        <div className="footer__author">
          <small>Desenvolvido por</small>
          <a href={links.portfolio} target="_blank" rel="noopener noreferrer">
            Leonardo Camargo Rossato ↗
          </a>
          <span>2026</span>
        </div>
      </div>
    </footer>
  );
}
