import DriveFolderPreview from "../components/DriveFolderPreview";
import CompactListHeader from "../components/CompactListHeader";
import DriveFilePreview from "../components/DriveFilePreview";
import FileCard from "../components/FileCard";
import SectionTitle from "../components/SectionTitle";
import { getList } from "../data/lists";
import { links } from "../data/links";

const item = getList("list0");

export default function List0() {
  return <>
    <CompactListHeader list="LIST 0" lab="LAB 0" title="Página Individual e Jenkins"/>
    <section className="section list0-compact-section"><div className="container content-stack list0-compact-stack">
      <DriveFolderPreview
        title="Arquivos da List 0"
        description="Relatórios e materiais da atividade disponíveis diretamente na pasta oficial da List 0."
        href={links.list0Drive}
        embed={links.list0Embed}
        compact
      />

      <div className="list0-reports-heading"><SectionTitle eyebrow="Relatórios" title="Relatórios da List 0" description="Documentos entregues para a atividade de Página Individual, GitHub Pages e Jenkins."/></div>
      <div className="report-preview-grid">
        <DriveFilePreview title="Site antigo — Google Sites" fileName="Lab0_SistemasTempoReal_ITA_LeonardoRossato.pdf"
          description="Relatório referente à primeira versão da página individual desenvolvida utilizando Google Sites."
          fileId={links.list0GoogleSitesPdfId} fallbackHref={links.list0Drive}/>
        <DriveFilePreview title="Site novo — GitHub Pages" fileName="RelatórioList0_SistemasTempoReal_ITA_LeonardoRossato (2).pdf"
          description="Relatório referente à nova versão da página individual desenvolvida e publicada utilizando GitHub Pages."
          fileId={links.list0GithubPagesPdfId} fallbackHref={links.list0Drive}/>
        <DriveFilePreview title="Jenkins" fileName="Relatorio_ListEx0_Jenkins_Leonardo_Rossato.pdf"
          description="Relatório da atividade relacionada ao Jenkins e aos conceitos de integração contínua."
          fileId={links.list0JenkinsPdfId} fallbackHref={links.list0Drive}/>
      </div>

      <SectionTitle eyebrow="Lab 0" title="Página Individual e Jenkins" description="A Lista de Exercícios 0 teve como objetivo elaborar e disponibilizar uma página de índices individual para acompanhamento das atividades acadêmicas."/>
      <p className="prose">Foi criada uma página individual para centralizar listas de exercícios, artefatos produzidos, relatórios e materiais da disciplina. Também foi estruturado o Google Drive utilizado para armazenar os materiais desenvolvidos durante as atividades.</p>
      <div className="note-card"><h3>Pesquisa — Jenkins</h3><p>O relatório contém uma pesquisa sobre Jenkins e sua aplicação em processos de integração contínua e entrega contínua, abordando o que é Jenkins, utilização em projetos e possível utilização no Projeto Acadêmico SPRB-TR/BD.</p></div>
      <div className="note-card"><h3>Resultado</h3><p>A etapa resultou na criação e organização da página individual e da estrutura utilizada para centralizar os materiais da disciplina.</p></div>
      <SectionTitle eyebrow="Artefato" title="Arquivo identificado"/>
      <div className="files-grid">{item.files.map(f => <FileCard key={f.title} file={f} listLabel="LIST 0 · LAB 0" driveUrl={links.list0Drive}/>)}</div>
    </div></section>
  </>;
}
