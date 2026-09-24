export default function Timeline({ items }: { items: string[] }) {
  return <div className="timeline">{items.map((item, i) => (
    <div className="timeline__item" key={item}><span>{String(i+1).padStart(2,"0")}</span><p>{item}</p></div>
  ))}</div>;
}