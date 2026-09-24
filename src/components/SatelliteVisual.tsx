import { Radio, Satellite, Database, Monitor, Cpu } from "lucide-react";
export default function SatelliteVisual(){return <div className="satellite-visual" aria-label="Representação conceitual do fluxo do sistema">
  <div className="orbit orbit--one"/><div className="orbit orbit--two"/>
  <Satellite className="sat sat--a"/><Satellite className="sat sat--b"/><Satellite className="sat sat--c"/>
  <div className="satellite-visual__flow"><div><Radio/><span>Telemetria</span></div><b>↓</b><div><Cpu/><span>Processamento</span></div><b>↓</b><div><Database/><span>Dados</span></div><b>↓</b><div><Monitor/><span>HMI</span></div></div>
</div>}
