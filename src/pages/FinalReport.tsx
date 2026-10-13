import SectionTitle from "../components/SectionTitle";

export default function FinalReport() {
  return (
    <section className="section page-section">
      <div className="container">
        <SectionTitle
          eyebrow="CE-235 — Sistemas de Tempo Real"
          title="Relatório Final"
          description="Relatório consolidado das atividades desenvolvidas durante a disciplina CE-235 — Sistemas Embarcados de Tempo Real."
        />
        <div className="final-report-card">
          <h2>Relatório Final</h2>
          <p>Documento a ser disponibilizado.</p>
        </div>
      </div>
    </section>
  );
}
