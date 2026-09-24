const sprints=[
["SPRINT 1","31/08 → 25/09/2026","Telemetria, lógica SCADE, HMI e demonstração integrada."],
["SPRINT 2","28/09 → 30/10/2026","Evolução de comunicação, controle e verificação."],
["SPRINT 3","02/11 → 27/11/2026","Robustez, desempenho e consolidação de evidências."]
];
export default function SprintTimeline(){return <div className="sprint-timeline">{sprints.map((s,i)=><article className={i===0?"is-current":""} key={s[0]}><span>{s[0]}</span><strong>{s[1]}</strong><p>{s[2]}</p></article>)}</div>}
