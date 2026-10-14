import { ExternalLink, Images } from "lucide-react";

type Props = {
  title: string;
  folderHref: string;
  folderEmbed: string;
  imageUrls?: string[];
};

export default function EvidenceGallery({ title, folderHref, folderEmbed, imageUrls = [] }: Props) {
  if (!imageUrls.length) {
    return (
      <article className="evidence-gallery">
        <div className="evidence-gallery__heading">
          <span><Images size={19}/></span>
          <div><h3>{title}</h3><p>As imagens permanecem no Google Drive. O carrossel está preparado para receber URLs ou IDs individuais posteriormente.</p></div>
        </div>
        <div className="evidence-gallery__folder">
          <iframe src={folderEmbed} title={`Evidências — ${title}`} loading="lazy" referrerPolicy="no-referrer"/>
        </div>
        <a className="button button--secondary" href={folderHref} target="_blank" rel="noopener noreferrer">
          Abrir pasta de evidências <ExternalLink size={14}/>
        </a>
      </article>
    );
  }

  return (
    <article className="evidence-gallery">
      <div className="evidence-gallery__heading"><span><Images size={19}/></span><h3>{title}</h3></div>
      <div className="evidence-gallery__strip">
        {imageUrls.map((src, i) => <a href={src} target="_blank" rel="noopener noreferrer" key={src}><img src={src} alt={`${title} — evidência ${i+1}`} loading="lazy"/></a>)}
      </div>
    </article>
  );
}
