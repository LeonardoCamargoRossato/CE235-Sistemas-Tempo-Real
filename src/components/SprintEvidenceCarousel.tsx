import { CSSProperties, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

export type SprintEvidenceItem = {
  label: string;
  alt: string;
  spriteIndex?: number;
  src?: string;
};

function SpriteMedia({
  atlasSrc,
  item,
  className = "",
}: {
  atlasSrc?: string;
  item: SprintEvidenceItem;
  className?: string;
}) {
  if (item.src) {
    return <img className={`sprint-evidence-direct ${className}`.trim()} src={item.src} alt={item.alt} loading="eager" />;
  }

  if (!atlasSrc) {
    return <div className={`sprint-evidence-sprite ${className}`.trim()} role="img" aria-label={item.alt} />;
  }

  const spriteIndex = item.spriteIndex ?? 0;
  const backgroundPositionY = spriteIndex === 0 ? 0 : (spriteIndex / 9) * 100;
  const style: CSSProperties = {
    backgroundImage: `url("${atlasSrc}")`,
    backgroundSize: "100% 1000%",
    backgroundPosition: `center ${backgroundPositionY}%`,
    backgroundRepeat: "no-repeat",
  };

  return (
    <div
      className={`sprint-evidence-sprite ${className}`.trim()}
      style={style}
      role="img"
      aria-label={item.alt}
    />
  );
}

export function SprintSpriteFigure({
  src,
  atlasSrc,
  spriteIndex,
  caption,
  alt,
}: {
  src?: string;
  atlasSrc?: string;
  spriteIndex?: number;
  caption: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const item = useMemo(
    () => ({ label: caption, alt, src, spriteIndex }),
    [caption, alt, src, spriteIndex],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <article className="sprint-main-figure">
        <button type="button" className="sprint-main-figure__media" onClick={() => setOpen(true)} aria-label={`Ampliar ${caption}`}>
          <SpriteMedia atlasSrc={atlasSrc} item={item} />
          <span><Expand size={17} /> Ampliar</span>
        </button>
        <strong>{caption}</strong>
      </article>

      {open && (
        <div className="sprint-evidence-lightbox" role="dialog" aria-modal="true" aria-label={caption} onClick={() => setOpen(false)}>
          <div className="sprint-evidence-lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <div className="sprint-evidence-lightbox__bar">
              <strong>{caption}</strong>
              <button type="button" onClick={() => setOpen(false)} aria-label="Fechar imagem"><X size={22} /></button>
            </div>
            <div className="sprint-evidence-lightbox__media">
              <SpriteMedia atlasSrc={atlasSrc} item={item} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function SprintEvidenceCarousel({
  atlasSrc,
  items,
  title,
}: {
  atlasSrc?: string;
  items: SprintEvidenceItem[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const item = items[index];

  const previous = () => setIndex((current) => (current - 1 + items.length) % items.length);
  const next = () => setIndex((current) => (current + 1) % items.length);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "ArrowLeft") setIndex((current) => (current - 1 + items.length) % items.length);
      if (event.key === "ArrowRight") setIndex((current) => (current + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, items.length]);

  if (!item) return null;

  return (
    <>
      <section className="sprint-evidence-carousel" aria-label={title}>
        <div className="sprint-evidence-carousel__topline">
          <strong>{title}</strong>
          <span>{index + 1} / {items.length}</span>
        </div>

        <div className="sprint-evidence-carousel__stage">
          <button className="sprint-evidence-carousel__arrow sprint-evidence-carousel__arrow--left" type="button" onClick={previous} aria-label="Imagem anterior">
            <ChevronLeft size={28} />
          </button>

          <button type="button" className="sprint-evidence-carousel__media" onClick={() => setOpen(true)} aria-label={`Ampliar ${item.label}`}>
            <SpriteMedia atlasSrc={atlasSrc} item={item} />
            <span className="sprint-evidence-carousel__expand"><Expand size={17} /> Ampliar</span>
          </button>

          <button className="sprint-evidence-carousel__arrow sprint-evidence-carousel__arrow--right" type="button" onClick={next} aria-label="Próxima imagem">
            <ChevronRight size={28} />
          </button>
        </div>

        <div className="sprint-evidence-carousel__caption">{item.label}</div>
        <div className="sprint-evidence-carousel__dots" aria-label="Selecionar imagem do carrossel">
          {items.map((entry, itemIndex) => (
            <button
              type="button"
              key={`${entry.label}-${itemIndex}`}
              className={itemIndex === index ? "is-active" : ""}
              onClick={() => setIndex(itemIndex)}
              aria-label={`Ver ${entry.label}`}
              aria-current={itemIndex === index ? "true" : undefined}
            />
          ))}
        </div>
      </section>

      {open && (
        <div className="sprint-evidence-lightbox" role="dialog" aria-modal="true" aria-label={item.label} onClick={() => setOpen(false)}>
          <div className="sprint-evidence-lightbox__panel" onClick={(event) => event.stopPropagation()}>
            <div className="sprint-evidence-lightbox__bar">
              <button type="button" onClick={previous} aria-label="Imagem anterior"><ChevronLeft size={22} /></button>
              <strong>{item.label}</strong>
              <div className="sprint-evidence-lightbox__actions">
                <span>{index + 1} / {items.length}</span>
                <button type="button" onClick={() => setOpen(false)} aria-label="Fechar imagem"><X size={22} /></button>
              </div>
            </div>
            <div className="sprint-evidence-lightbox__media">
              <SpriteMedia atlasSrc={atlasSrc} item={item} />
            </div>
            <button type="button" className="sprint-evidence-lightbox__next" onClick={next} aria-label="Próxima imagem"><ChevronRight size={28} /></button>
          </div>
        </div>
      )}
    </>
  );
}
