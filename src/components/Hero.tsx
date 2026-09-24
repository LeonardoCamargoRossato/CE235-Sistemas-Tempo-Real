import { ExternalLink } from "lucide-react";
import { links } from "../data/links";

export default function Hero() {
  const satelliteHero = `${import.meta.env.BASE_URL}assets/ce235-satellite-brazil-hero.png`;

  return (
    <section
      className="institutional-hero institutional-hero--satellite"
      style={{ backgroundImage: `url("${satelliteHero}")` }}
    >
      <div className="institutional-hero__satellite-overlay" />
      <div className="container institutional-hero__content institutional-hero__content--satellite">
        <div className="institutional-hero__copy">
          <span className="hero__kicker">Instituto Tecnológico de Aeronáutica</span>
          <div className="hero__code">CE-235</div>
          <h1>Sistemas Embarcados de Tempo Real</h1>
          <h2>Página Individual da Disciplina</h2>
          <p>
            Documentação acadêmica das atividades desenvolvidas na CE-235 — Sistemas
            Embarcados de Tempo Real, incluindo laboratórios com ANSYS SCADE e a
            participação no Projeto Acadêmico SPRB-TR/BD.
          </p>
          <a
            className="button button--gold hero-drive"
            href={links.disciplineDrive}
            target="_blank"
            rel="noopener noreferrer"
          >
            Drive da Disciplina <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
