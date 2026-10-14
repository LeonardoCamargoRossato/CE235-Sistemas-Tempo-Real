import { useEffect, useState } from "react";
import { Expand, X } from "lucide-react";

export type SprintMediaItem = {
  src: string;
  alt: string;
  caption: string;
};

export default function SprintMediaGallery({
  title,
  items,
  className = "",
}: {
  title: string;
  items: SprintMediaItem[];
  className?: string;
}) {
  const [active, setActive] = useState<SprintMediaItem | null>(null);

  useEffect(() => {
    if (!active) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [active]);

  return (
    <>
      <div className={`sprint-media-gallery ${className}`.trim()} aria-label={title}>
        {items.map((item) => (
          <button
            className="sprint-media-gallery__item"
            key={item.src}
            type="button"
            onClick={() => setActive(item)}
            aria-label={`Ampliar ${item.caption}`}
          >
            <div className="sprint-media-gallery__image">
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span><Expand size={17} /> Ampliar</span>
            </div>
            <strong>{item.caption}</strong>
          </button>
        ))}
      </div>

      {active && (
        <div className="sprint-lightbox" role="dialog" aria-modal="true" aria-label={active.caption} onClick={() => setActive(null)}>
          <div className="sprint-lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <div className="sprint-lightbox__bar">
              <strong>{active.caption}</strong>
              <button type="button" onClick={() => setActive(null)} aria-label="Fechar imagem"><X size={22}/></button>
            </div>
            <img src={active.src} alt={active.alt} />
          </div>
        </div>
      )}
    </>
  );
}
