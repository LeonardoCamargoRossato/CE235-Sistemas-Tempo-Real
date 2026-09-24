import { ExternalLink } from "lucide-react";
import { links } from "../data/links";

export default function Hero() {
  const itaLogo = `${import.meta.env.BASE_URL}assets/ITA_logo.png`;

  return (
    <section className="institutional-hero institutional-hero--compact">
      <div className="institutional-hero__grid" />
      <div className="container institutional-hero__content">
        <div>
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

        <aside className="hero-seal">
          <img src={itaLogo} alt="Instituto Tecnológico de Aeronáutica — ITA" />
          <strong>CE-235</strong>
          <span>REAL-TIME EMBEDDED SYSTEMS</span>
        </aside>
      </div>
    </section>
  );
}
