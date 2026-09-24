import type { ReactNode } from "react";
export default function LabSection({id,number,title,description,children}:{id:string;number:string;title:string;description:string;children:ReactNode}){return <article id={id} className="lab-section"><header><span className="eyebrow">{number}</span><h2>{title}</h2><p>{description}</p></header>{children}</article>}
