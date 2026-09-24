import { ExternalLink, Cpu, Timer, Braces, Workflow, Box, Users, ArrowDown } from "lucide-react";
import { links } from "../data/links";
import SectionTitle from "../components/SectionTitle";
import ProfessorCard from "../components/ProfessorCard";
import CourseJourney from "../components/CourseJourney";

const objectives = [
  ["Sistemas Embarcados", "Desenvolvimento de protótipos.", Cpu],
  ["Tempo Real", "Aplicações envolvendo sensores, aquisição e processamento de dados.", Timer],
  ["Engenharia de Software", "Aplicação de conceitos e práticas de desenvolvimento.", Braces],
  ["Model-Based Design", "Uso de arquiteturas dirigidas por modelos.", Workflow],
  ["SCADE", "Modelagem, simulação, geração de código e integração.", Box],
  ["Desenvolvimento Ágil", "Aplicação do Scrum e suas boas práticas.", Users],
] as const;

function OfficialLinkCard({ href, title, description }: { href: string; title: string; description: string }) {
  return (
    <a className="official-reference-card" href={href} target="_blank" rel="noopener noreferrer">
      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>
      <ExternalLink size={18} aria-hidden="true" />
    </a>
  );
}

export default function Discipline() {
  return (
    <>
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Instituto Tecnológico de Aeronáutica — ITA</span>
          <h1>CE-235</h1>
          <h2>Sistemas Embarcados de Tempo Real</h2>
        </div>
      </section>

      <section className="section">
        <div className="container content-stack">
          <div>
            <SectionTitle eyebrow="Sobre a disciplina" title="Engenharia aplicada a sistemas embarcados" description="A CE-235 aborda o desenvolvimento de sistemas embarcados de tempo real por meio da aplicação de conceitos de Engenharia de Software, desenvolvimento baseado em modelos, ferramentas de engenharia e atividades práticas." />
            <div className="objective-grid">
              {objectives.map(([title, description, Icon]) => (
                <article className="objective-card" key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>

          <section className="academic-project-panel" aria-labelledby="academic-project-title">
            <span className="eyebrow">Projeto acadêmico</span>
            <h2 id="academic-project-title">Projeto SPRB-TR/BD</h2>
            <p className="academic-project-name">Projeto Acadêmico para um Sistema de Posicionamento Regional Brasileiro em Tempo Real com Big Data (SPRB-TR/BD)</p>
            <p>As atividades da CE-235 / CSI-65 estão inseridas no contexto acadêmico do SPRB-TR/BD. Esta página registra individualmente as atividades desenvolvidas por Leonardo Camargo Rossato.</p>

            <div className="project-context-flow" aria-label="Relação entre projeto, disciplina e página individual">
              <a href={links.sprbOfficial} target="_blank" rel="noopener noreferrer">
                <small>PROJETO GERAL</small><strong>Projeto SPRB-TR/BD</strong><span>Portal geral do projeto acadêmico</span><ExternalLink size={16} />
              </a>
              <ArrowDown className="project-context-flow__arrow" aria-hidden="true" />
              <a href={links.sprbCe235} target="_blank" rel="noopener noreferrer">
                <small>DISCIPLINA / TURMA</small><strong>CE-235 / CSI-65</strong><span>Página da disciplina no Projeto SPRB-TR/BD</span><ExternalLink size={16} />
              </a>
              <ArrowDown className="project-context-flow__arrow" aria-hidden="true" />
              <div className="project-context-flow__current">
                <small>PÁGINA INDIVIDUAL</small><strong>Leonardo Camargo Rossato</strong><span>Documentação individual das atividades desenvolvidas</span>
              </div>
            </div>
          </section>

          <div>
            <SectionTitle eyebrow="Trajetória" title="Da disciplina ao projeto" />
            <CourseJourney />
          </div>

          <div>
            <SectionTitle eyebrow="Docentes" title="Professores" />
            <div className="professor-grid">
              <ProfessorCard name="Prof. Adilson Marques da Cunha" href={links.profCunha} interests={["Embedded Systems", "Real-Time Systems", "Model-Based Design"]} />
              <ProfessorCard name="Prof. Denis Silva Loubach" />
            </div>

            <section className="official-references" aria-labelledby="official-references-title">
              <span className="eyebrow">Referências oficiais da disciplina</span>
              <h3 id="official-references-title">Portais oficiais do SPRB-TR/BD</h3>
              <p>Informações institucionais, materiais e organização do projeto acadêmico podem ser consultados nos portais oficiais do SPRB-TR/BD.</p>
              <div className="official-reference-grid">
                <OfficialLinkCard href={links.sprbOfficial} title="Projeto SPRB-TR/BD" description="Portal geral do projeto" />
                <OfficialLinkCard href={links.sprbCe235} title="CE-235 / CSI-65" description="Página específica da disciplina" />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
