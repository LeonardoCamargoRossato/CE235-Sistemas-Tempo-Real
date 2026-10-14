import { ExternalLink, FileText } from "lucide-react";

type Props = {
  title: string;
  fileName: string;
  description: string;
  fileId?: string;
  fallbackHref: string;
  buttonLabel?: string;
};

export default function DriveFilePreview({
  title, fileName, description, fileId, fallbackHref, buttonLabel = "Abrir no Google Drive"
}: Props) {
  const preview = fileId ? `https://drive.google.com/file/d/${fileId}/preview` : undefined;
  const href = fileId ? `https://drive.google.com/file/d/${fileId}/view` : fallbackHref;

  return (
    <article className="drive-file-preview-card">
      <div className="drive-file-preview-card__viewer">
        {preview ? (
          <iframe src={preview} title={`PDF — ${title}`} loading="lazy" allow="autoplay" />
        ) : (
          <div className="drive-file-preview-card__fallback">
            <FileText size={34}/>
            <span>Preview individual pendente</span>
            <small>O arquivo pode ser localizado na pasta do Google Drive.</small>
          </div>
        )}
      </div>
      <div className="drive-file-preview-card__body">
        <span className="file-type-pill">PDF</span>
        <h3>{title}</h3>
        <small>{fileName}</small>
        <p>{description}</p>
        <a className="button button--primary" href={href} target="_blank" rel="noopener noreferrer">
          {buttonLabel} <ExternalLink size={14}/>
        </a>
      </div>
    </article>
  );
}
