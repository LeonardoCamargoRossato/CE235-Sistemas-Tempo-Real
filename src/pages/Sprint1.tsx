import { ExternalLink } from "lucide-react";
import { links } from "../data/links";
import CompactListHeader from "../components/CompactListHeader";
import SectionTitle from "../components/SectionTitle";
import ContributionCard from "../components/ContributionCard";
import TelemetryFlow from "../components/TelemetryFlow";
import SprintMediaGallery from "../components/SprintMediaGallery";

const githubImages = [
  {
    src: `${import.meta.env.BASE_URL}images/sprint1/github/github_repo_overview.png`,
    alt: "Visão geral do repositório US123 Telemetry Decoder no GitHub",
    caption: "Repo overview",
  },
  {
    src: `${import.meta.env.BASE_URL}images/sprint1/github/github_readme_overview.png`,
    alt: "Visão geral do README do US123 Telemetry Decoder",
    caption: "README overview",
  },
  {
    src: `${import.meta.env.BASE_URL}images/sprint1/github/github_readme_project_links.png`,
    alt: "Links do projeto apresentados no README do US123 Telemetry Decoder",
    caption: "Project links",
  },
  {
    src: `${import.meta.env.BASE_URL}images/sprint1/github/github_readme_tech_author.png`,
    alt: "Tecnologias e autoria apresentadas no README do US123 Telemetry Decoder",
    caption: "Tecnologias / Autor",
  },
];

export default function Sprint1() {
  return (
    <>
      <CompactListHeader list="LIST 3" lab="SPRINT 1" title="Primeira Sprint do Projeto SPRB-TR/BD" />

      <section className="sprint1-meta">
        <div className="container">
          <span>Projeto Acadêmico SPRB-TR/BD</span>
          <strong>31/08 — 25/09/2026</strong>
        </div>
      </section>

      <section className="section sprint1-main">
        <div className="container content-stack content-stack--sprint1">
          <ContributionCard demoUrl={links.us123TelemetryDecoder} githubUrl={links.us123Repository} />

          <div className="sprint1-actions">
            <a className="button button--primary" href={links.us123TelemetryDecoder} target="_blank" rel="noopener noreferrer">
              Abrir demonstração US123 <ExternalLink size={15}/>
            </a>
            <a className="button button--secondary" href={links.us123Repository} target="_blank" rel="noopener noreferrer">
              Ver repositório no GitHub <ExternalLink size={15}/>
            </a>
            <a className="button button--secondary" href={links.us123Issue70} target="_blank" rel="noopener noreferrer">
              Ver Subsprint #70 <ExternalLink size={15}/>
            </a>
          </div>

          <div>
            <SectionTitle
              eyebrow="US123"
              title="Demonstração publicada"
              description="Demonstração funcional da cadeia de recepção, desempacotamento e validação de telemetria."
            />
            <article className="sprint-demo-card">
              <div className="browser-bar"><i/><i/><i/><span>US123 — Telemetry Decoder</span></div>
              <iframe
                src={links.us123TelemetryDecoder}
                title="Demonstração publicada — US123 Telemetry Decoder"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="sprint-demo-card__footer">
                <p>Se o navegador bloquear a incorporação, abra a demonstração diretamente em uma nova aba.</p>
                <a className="button button--secondary" href={links.us123TelemetryDecoder} target="_blank" rel="noopener noreferrer">
                  Abrir em nova aba <ExternalLink size={14}/>
                </a>
              </div>
            </article>
          </div>

          <div>
            <SectionTitle
              eyebrow="GitHub"
              title="Repositório e implementação"
              description="Visão do repositório e do README da implementação US123 — Telemetry Decoder."
            />
            <SprintMediaGallery title="Repositório no GitHub" items={githubImages} className="sprint-media-gallery--github" />
            <div className="inline-cta">
              <a className="button button--primary" href={links.us123Repository} target="_blank" rel="noopener noreferrer">
                Ver repositório completo no GitHub <ExternalLink size={15}/>
              </a>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Resumo técnico" title="Implementação" />
            <div className="sprint-tech-grid">
              <article><span>Frontend / demonstrador</span><strong>React · Vite · TypeScript</strong></article>
              <article><span>Processamento</span><strong>Recepção simulada · parsing · faixa · sequência</strong></article>
              <article><span>Implementação de referência</span><strong>C · camada UDP separada do core</strong></article>
              <article><span>Publicação</span><strong>GitHub Pages</strong></article>
            </div>
            <p className="academic-disclaimer">
              Este projeto é um demonstrador acadêmico e não afirma certificação ou validação pelo ANSYS SCADE.
              A implementação em C é apresentada como referência para futura integração com ANSYS SCADE / imported operators.
            </p>
          </div>

          <div>
            <SectionTitle eyebrow="Fluxo funcional" title="Cadeia de processamento da US123" />
            <TelemetryFlow />
          </div>

          <div>
            <SectionTitle eyebrow="Rastreabilidade" title="Rastreabilidade da atividade" />
            <div className="traceability-grid">
              <a href={links.us123Issue41} target="_blank" rel="noopener noreferrer"><span>US123 principal</span><strong>#41</strong></a>
              <a href={links.us123Issue70} target="_blank" rel="noopener noreferrer"><span>Subsprint / Issue</span><strong>#70</strong></a>
              <a href={links.us123Repository} target="_blank" rel="noopener noreferrer"><span>Repositório</span><strong>US123 Telemetry Decoder</strong></a>
              <a href={links.us123TelemetryDecoder} target="_blank" rel="noopener noreferrer"><span>Aplicação publicada</span><strong>GitHub Pages</strong></a>
              <a href={links.sprint1Page} target="_blank" rel="noopener noreferrer"><span>Página</span><strong>Sprint 1</strong></a>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Transição"
              title="Dos Labs para o projeto"
              description="A Sprint 1 marca a transição dos laboratórios preparatórios para o desenvolvimento colaborativo do Projeto Acadêmico SPRB-TR/BD."
            />
            <div className="knowledge-bridge">
              <div><span>LABS</span><strong>Landing Gear</strong><strong>Fuel Management</strong><strong>Integration</strong></div>
              <i>→</i>
              <div><span>CONHECIMENTOS</span><strong>SCADE</strong><strong>ARINC 661</strong><strong>Comunicação</strong><strong>Integração</strong></div>
              <i>→</i>
              <div className="knowledge-bridge__target"><span>SPRINT 1</span><strong>Projeto SPRB-TR/BD</strong></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
