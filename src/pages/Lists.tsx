import DriveFolderPreview from "../components/DriveFolderPreview";
import ListCard from "../components/ListCard";
import SectionTitle from "../components/SectionTitle";
import { lists } from "../data/lists";
import { links } from "../data/links";

export default function Lists() {
  return (
    <section className="section page-section">
      <div className="container content-stack">
        <div>
          <SectionTitle
            eyebrow="CE-235"
            title="Lista de Exercícios"
            description="Organização das atividades conforme os materiais reais da disciplina."
          />
          <div className="cards-grid">{lists.map((x) => <ListCard key={x.id} item={x} />)}</div>
        </div>

        <DriveFolderPreview
          title="Arquivos da Lista de Exercícios"
          description="Materiais e arquivos das atividades disponíveis na pasta da disciplina."
          href={links.exerciseListsDrive}
          embed={links.exerciseListsEmbed}
          buttonLabel="Abrir no Google Drive"
        />
      </div>
    </section>
  );
}
