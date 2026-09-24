export default function StatusBadge({ status }: { status: string }) {
  const key = status.toLowerCase().replace(/ /g, "-");
  return <span className={`status status--${key}`}>{status}</span>;
}