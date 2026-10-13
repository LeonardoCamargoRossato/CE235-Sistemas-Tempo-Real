import { ExternalLink, FolderOpen } from "lucide-react";
import SectionTitle from "../components/SectionTitle";
import { links } from "../data/links";

const folders = [
  {
    title: "Entregáveis do Time 2",
    description: "Conjunto consolidado dos entregáveis produzidos pelo Time Scrum 2 durante a Sprint, incluindo documentação e materiais apresentados nas cerimônias e revisões do projeto.",
    href: links.team2Deliverables,
    embed: links.team2DeliverablesEmbed,
  },
  {
    title: "Artefatos",
    description: "Acervo documental relacionado à engenharia de software, gestão ágil e desenvolvimento do Time Scrum 2, incluindo especificações, decisões técnicas e demais documentos produzidos durante o projeto.",
    href: links.team2Artifacts,
    embed: links.team2ArtifactsEmbed,
  },
  {
    title: "Reuniões",
    description: "Registros e materiais das reuniões de acompanhamento e alinhamento técnico realizadas pelo Time Scrum 2 durante a Sprint.",
    href: links.team2Meetings,
    embed: links.team2MeetingsEmbed,
  },
  {
    title: "Atas",
    description: "Atas e registros formais das reuniões, contendo atividades executadas, decisões, metas, impedimentos e próximos passos.",
    href: links.team2Minutes,
    embed: links.team2MinutesEmbed,
  },
];

export default function Artifacts() {
  return (
    <section className="section page-section artifacts-page">
      <div className="container">
        <SectionTitle
          eyebrow="CE-235 · SPRB-TR/BD"
          title="Artefatos da Disciplina"
          description="Esta página reúne os principais documentos, entregáveis, registros e artefatos produzidos durante as atividades da CE-235 e da primeira Sprint do Projeto Acadêmico SPRB-TR/BD. Os conteúdos abaixo são mantidos no Google Drive da disciplina e do Time Scrum 2."
        />

        <a className="discipline-drive-highlight" href={links.disciplineDrive} target="_blank" rel="noopener noreferrer">
          <span className="discipline-drive-highlight__icon"><FolderOpen size={24} /></span>
          <span>
            <small>REPOSITÓRIO ACADÊMICO</small>
            <strong>Drive da Disciplina</strong>
            <p>Acesse a estrutura completa de arquivos, relatórios, laboratórios e demais materiais da CE-235.</p>
          </span>
          <b>Abrir Drive da Disciplina <ExternalLink size={15} /></b>
        </a>

        <div className="artifact-section-heading">
          <span className="eyebrow">Documentação colaborativa</span>
          <h2>Documentação do Time 2</h2>
        </div>

        <div className="drive-folder-grid">
          {folders.map((folder) => (
            <article className="drive-folder-card" key={folder.title}>
              <div className="drive-folder-preview">
                <iframe
                  src={folder.embed}
                  title={`Preview — ${folder.title}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="drive-folder-card__body">
                <h3>{folder.title}</h3>
                <p>{folder.description}</p>
                <a className="button button--primary" href={folder.href} target="_blank" rel="noopener noreferrer">
                  Abrir no Google Drive <ExternalLink size={14} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
