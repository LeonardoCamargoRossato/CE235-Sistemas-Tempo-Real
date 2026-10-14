import { ExternalLink, FolderOpen } from "lucide-react";

type Props = {
  title: string;
  description?: string;
  href: string;
  embed: string;
  buttonLabel?: string;
  compact?: boolean;
};

export default function DriveFolderPreview({
  title, description, href, embed, buttonLabel = "Abrir no Google Drive", compact = false
}: Props) {
  return (
    <article className={`embedded-drive-card${compact ? " embedded-drive-card--compact" : ""}`}>
      <div className="embedded-drive-card__preview">
        <iframe src={embed} title={`Preview — ${title}`} loading="lazy" referrerPolicy="no-referrer" />
      </div>
      <div className="embedded-drive-card__body">
        <span className="embedded-drive-card__icon"><FolderOpen size={18}/></span>
        <div>
          <h3>{title}</h3>
          {description && <p>{description}</p>}
          <a className="button button--primary" href={href} target="_blank" rel="noopener noreferrer">
            {buttonLabel} <ExternalLink size={14}/>
          </a>
        </div>
      </div>
    </article>
  );
}
