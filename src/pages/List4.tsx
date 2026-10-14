import CompactListHeader from "../components/CompactListHeader";
import DriveCard from "../components/DriveCard";
import SectionTitle from "../components/SectionTitle";
import { links } from "../data/links";

export default function List4() {
  return <>
    <CompactListHeader list="LIST 4" lab="EM DESENVOLVIMENTO" title="Próxima atividade" />
    <section className="section">
      <div className="container content-stack">
        <DriveCard
          title="Arquivos da List 4"
          description="A pasta oficial da List 4 será vinculada aqui quando o material for disponibilizado."
          href={links.list4Drive}
        />
        <SectionTitle
          eyebrow="List 4"
          title="Página-base preparada"
          description="Esta página está pronta para receber o enunciado oficial, entregáveis, relatório, evidências e demais materiais da List 4."
        />
        <div className="note-card">
          <h3>Em desenvolvimento</h3>
          <p>Nenhum conteúdo acadêmico foi preenchido antecipadamente para evitar inventar requisitos, documentos, datas ou links ainda não fornecidos.</p>
        </div>
      </div>
    </section>
  </>;
}
