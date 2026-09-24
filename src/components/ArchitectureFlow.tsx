import { ArrowDown } from "lucide-react";
export default function ArchitectureFlow({ steps }: { steps: string[] }) {
  return <div className="architecture-flow">{steps.map((step, i) => (
    <div className="architecture-flow__group" key={step}>
      <div className="architecture-flow__step">{step}</div>
      {i < steps.length - 1 && <ArrowDown className="architecture-flow__arrow" size={20}/>}
    </div>
  ))}</div>;
}