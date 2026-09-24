import type { LucideIcon } from "lucide-react";
import { ExternalLink } from "lucide-react";
export default function ProjectResourceCard({icon:Icon,label,title,description,href,featured=false}:{icon:LucideIcon;label:string;title:string;description:string;href:string;featured?:boolean}) {
  return <a className={`project-resource ${featured?"project-resource--featured":""}`} href={href} target="_blank" rel="noopener noreferrer">
    <div className="project-resource__icon"><Icon size={24}/></div><span>{label}</span><h3>{title}</h3><p>{description}</p><strong>Abrir recurso <ExternalLink size={15}/></strong>
  </a>
}
