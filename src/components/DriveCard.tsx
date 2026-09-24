import { ExternalLink, FolderOpen } from "lucide-react";
export default function DriveCard({ title, description, href, prominent=false }: {title:string;description:string;href?:string;prominent?:boolean}) {
  return <section className={`drive-card ${prominent ? "drive-card--prominent" : ""}`}><div className="drive-card__icon"><FolderOpen/></div><div className="drive-card__body"><span className="eyebrow">Google Drive</span><h2>{title}</h2><p>{description}</p></div>{href ? <a className="button button--gold drive-card__cta" href={href} target="_blank" rel="noopener noreferrer">Abrir no Google Drive <ExternalLink size={16}/></a> : <span className="drive-card__pending">Link da pasta a confirmar</span>}</section>
}
