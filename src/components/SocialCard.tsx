import { ExternalLink, Globe2 } from "lucide-react";
export default function SocialCard({ title, description, href, icon }: { title: string; description: string; href?: string; icon?: React.ReactNode }) {
  const content = <><div className="social-card__icon">{icon ?? <Globe2/>}</div><h3>{title}</h3><p>{description}</p><span className="social-card__link">Acessar <ExternalLink size={14}/></span></>;
  return href ? <a className="social-card" href={href} target="_blank" rel="noreferrer">{content}</a> : <div className="social-card is-disabled">{content}</div>;
}