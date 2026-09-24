import StatusBadge from "./StatusBadge";
import Tag from "./Tag";
import ExternalButton from "./ExternalButton";
import { FolderOpen } from "lucide-react";
import { Link } from "react-router-dom";
import type { ListItem } from "../data/lists";
import { links } from "../data/links";

export default function PageHeader({ item, eyebrow = "CE-235 — Sistemas de Tempo Real" }: { item: ListItem; eyebrow?: string }) {
  const driveUrl = links[`${item.id}Drive` as keyof typeof links] as string;
  return (
    <section className="page-header">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <div className="page-header__title-row"><div><h1>LIST {item.number}</h1><h2>{item.title}</h2></div><StatusBadge status={item.status}/></div>
        <p>{item.description}</p>
        <div className="tag-row">{item.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
        <div className="info-strip">
          <span><b>Tipo</b> Exercício / Projeto</span><span><b>Área</b> Sistemas Embarcados</span><span><b>Disciplina</b> CE-235</span><span><b>Status</b> {item.status}</span>
        </div>
        <div className="card-actions">
          <ExternalButton href={driveUrl} className="button button--gold"><FolderOpen size={15}/> Abrir pasta no Drive</ExternalButton>
          <Link className="button button--ghost" to="/listas">Voltar para Listas</Link>{item.tags.some(t => t.toLowerCase().includes("scade")) && <Link className="button button--ghost" to="/scade">Conheça o SCADE →</Link>}
        </div>
      </div>
    </section>
  );
}