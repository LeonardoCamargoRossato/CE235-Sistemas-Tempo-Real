import { ExternalLink } from "lucide-react";

export default function ExternalButton({ href, children, className = "button button--secondary" }: { href?: string; children: React.ReactNode; className?: string }) {
  if (!href) return <button className={`${className} is-disabled`} disabled>{children}</button>;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}<ExternalLink size={15}/></a>;
}