import { useEffect, useState } from "react";
import { ExternalLink, Expand, FileText, X } from "lucide-react";

type Props={title:string;fileName:string;description:string;fileId?:string;localSrc?:string;fallbackHref:string;buttonLabel?:string;large?:boolean};

export default function DriveFilePreview({title,fileName,description,fileId,localSrc,fallbackHref,buttonLabel="Abrir PDF",large=false}:Props){
 const [open,setOpen]=useState(false);
 const preview=fileId?`https://drive.google.com/file/d/${fileId}/preview`:localSrc;
 const href=fileId?`https://drive.google.com/file/d/${fileId}/view`:(localSrc??fallbackHref);
 useEffect(()=>{if(!open)return; const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)}; document.addEventListener("keydown",onKey); document.body.classList.add("modal-open"); return()=>{document.removeEventListener("keydown",onKey);document.body.classList.remove("modal-open")}},[open]);
 return <>
  <article className={`drive-file-preview-card${large?" drive-file-preview-card--large":""}`}>
   <div className="drive-file-preview-card__viewer">{preview?<iframe src={preview} title={`PDF — ${title}`} loading="lazy" allow="autoplay"/>:<div className="drive-file-preview-card__fallback"><FileText size={34}/><span>Preview individual pendente</span></div>}</div>
   <div className="drive-file-preview-card__body"><span className="file-type-pill">PDF</span><h3>{title}</h3><small className="drive-file-preview-card__filename" title={fileName}>{fileName}</small><p>{description}</p>
    <div className="preview-actions"><a className="button button--primary" href={href} target="_blank" rel="noopener noreferrer">{buttonLabel} <ExternalLink size={14}/></a>
    {preview&&<button className="button button--secondary" onClick={()=>setOpen(true)}>Expandir <Expand size={14}/></button>}</div>
   </div>
  </article>
  {open&&preview&&<div className="pdf-modal" role="dialog" aria-modal="true" aria-label={title} onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}>
   <div className="pdf-modal__panel"><div className="pdf-modal__bar"><strong>{title}</strong><div><a href={href} target="_blank" rel="noopener noreferrer">Abrir PDF <ExternalLink size={14}/></a><button onClick={()=>setOpen(false)} aria-label="Fechar"><X size={22}/></button></div></div><iframe src={preview} title={`${title} — tela cheia`} allow="autoplay"/></div>
  </div>}
 </>;
}