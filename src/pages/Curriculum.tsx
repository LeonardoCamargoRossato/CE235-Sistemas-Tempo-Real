import { ExternalLink } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { links } from "../data/links";

export default function Curriculum() {
  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          eyebrow="Currículo"
          title="Leonardo Camargo Rossato"
          description="Acesso ao portfólio e site pessoal do aluno."
        />
        <div className="curriculum-card">
          <h2>Leonardo Camargo Rossato</h2>
          <p>Consulte o portfólio para informações profissionais e acadêmicas atualizadas.</p>
          <a className="button button--primary" href={links.portfolio} target="_blank" rel="noopener noreferrer">
            Portfólio / Site pessoal <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
