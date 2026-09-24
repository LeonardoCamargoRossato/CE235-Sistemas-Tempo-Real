import { ExternalLink } from "lucide-react";
import { links } from "../data/links";
import { assets } from "../data/assets";

export default function Hero() {
  return (
    <section
      className="institutional-hero institutional-hero--satellite"
      style={{ backgroundImage: `url("${assets.hero}")` }}
    >
      <div className="institutional-hero__satellite-overlay" aria-hidden="true" />
      <div className="container institutional-hero__content institutional-hero__content--satellite">
        <div className="hero-glass-panel">
          <span className="hero__kicker">Instituto Tecnológico de Aeronáutica</span>
          <div className="hero__code">CE-235</div>
          <h1>Sistemas Embarcados<br />de Tempo Real</h1>
          <h2>Página Individual da Disciplina</h2>

          <div className="hero-author">
            <img src={assets.profile} alt="Leonardo Camargo Rossato" />
            <div className="hero-author__copy">
              <strong>Leonardo Camargo Rossato</strong>
              <span>Arquiteto de Soluções · Doutorando no ITA</span>
              <small>Página individual — CE-235</small>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button button--gold" href={links.disciplineDrive} target="_blank" rel="noopener noreferrer">
              Drive da Disciplina <ExternalLink size={15} />
            </a>
            <a
              className="button button--hero-portfolio"
              href={links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              title="Leonardo Rossato — Research, Software & Technology"
            >
              Portfólio <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
