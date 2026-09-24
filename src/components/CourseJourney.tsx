const steps=["CE-235","Sistemas Embarcados","ANSYS SCADE","Labs","SPRB-TR/BD","Scrum","Sprint 1","Integração do Sistema"];
export default function CourseJourney(){return <div className="course-journey">{steps.map((s,i)=><div className="course-journey__item" key={s}><span>{String(i+1).padStart(2,"0")}</span><strong>{s}</strong>{i<steps.length-1&&<i/>}</div>)}</div>}
