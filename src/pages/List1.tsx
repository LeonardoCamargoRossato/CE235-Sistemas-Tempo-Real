import CompactListHeader from "../components/CompactListHeader";
import DriveFolderPreview from "../components/DriveFolderPreview";
import EvidenceGallery from "../components/EvidenceGallery";
import DriveFilePreview from "../components/DriveFilePreview";
import ReportPdfViewer from "../components/ReportPdfViewer";
import { links } from "../data/links";

export default function List1(){return <>
 <CompactListHeader list="LIST 1" lab="LABS 1–2" title="Modelagem e Simulação com ANSYS SCADE"/>
 <section className="section dashboard-section"><div className="container content-stack content-stack--compact">
  <section id="lab1" className="lab-dashboard">
   <div className="lab-dashboard__title"><span>LAB 1</span><h2>Landing Gear System</h2></div>
   <div className="dashboard-materials">
    <DriveFolderPreview title="Arquivos do Lab 1" description="LG.html, relatório, landing_gear.zip e demais materiais do Landing Gear." href={links.lab1Drive} embed={links.lab1Embed} buttonLabel="Abrir pasta do Lab 1"/>
   </div>
   <div className="list1-official-docs-grid">
    <DriveFilePreview title="Relatório do Lab 1" fileName="RelatórioLab1_SistemasTempoReal_ITA_LeonardoRossato.pdf" description="Desenvolvimento e simulação do Landing Gear System utilizando ANSYS SCADE." fileId={links.lab1ReportPdfId} fallbackHref={links.lab1Drive} large/>
    <DriveFilePreview title="Enunciado — ListEx 1" fileName="Aula09.2dCe237Ce230Ce23526s(Especificação de Requisitos da ListEx1 do LAB 1 e do LAB 2_Prof. Cunha).docx(1).pdf" description="Especificação de Requisitos da ListEx 1 — Labs 1 e 2 / ANSYS SCADE." localSrc={`${import.meta.env.BASE_URL}documents/list1/Aula09.2dCe237Ce230Ce23526s(Especificação de Requisitos da ListEx1 do LAB 1 e do LAB 2_Prof. Cunha).docx(1).pdf`} fallbackHref={links.list1Drive} large/>
   </div>
   <div className="evidence-grid"><EvidenceGallery title="Evidências do Lab 1" folderHref={links.lab1EvidenceDrive} folderEmbed={links.lab1EvidenceEmbed}/><EvidenceGallery title="Landing Gear — Evidências da Simulação" folderHref={links.landingGearEvidenceDrive} folderEmbed={links.landingGearEvidenceEmbed}/></div>
   <div className="academic-detail"><h3>O que foi desenvolvido</h3><p className="prose">Desenvolvimento e simulação de um aplicativo de software de sistema embarcado de tempo real para controlar e representar os acionamentos do sistema de trem de pouso de uma aeronave fictícia utilizando ANSYS SCADE.</p>
    <ul className="compact-list"><li>Interface gráfica no SCADE Display.</li><li>Indicadores para nariz, lado esquerdo e lado direito.</li><li>Comandos Up/Down e Fail/Norm.</li><li>Lógica implementada no SCADE Suite.</li><li>Máquina de estados DOWN → TRANSITION → UP.</li><li>Temporização com ResetDelay.</li><li>Integração via propriedades ARINC 661.</li><li>Verificação e simulação do modelo.</li></ul>
    <div className="fact-grid"><div><b>Verde</b><span>posição estável</span></div><div><b>Âmbar</b><span>transição</span></div><div><b>Vermelho</b><span>falha</span></div></div>
    <p className="tech-line"><b>Ferramentas/conceitos:</b> ANSYS SCADE Suite · SCADE Display · ARINC 661 · State Machine · KCG · Simulator</p>
   </div>
  </section>

  <section id="lab2" className="lab-dashboard">
   <div className="lab-dashboard__title"><span>LAB 2</span><h2>Fuel Management System</h2></div>
   <div className="dashboard-materials">
    <DriveFolderPreview title="Arquivos do Lab 2" description="Relatório, Lab2.zip e demais materiais do Fuel Management." href={links.lab2Drive} embed={links.lab2Embed} buttonLabel="Abrir pasta do Lab 2"/>
   </div>
   <ReportPdfViewer title="Relatório do Lab 2" fileName="RelatórioLab2_SistemasTempoReal_ITA_LeonardoRossato.pdf" description="Desenvolvimento e simulação do Fuel Management utilizando ANSYS SCADE Suite e SCADE Display." fileId={links.lab2ReportPdfId} fallbackHref={links.lab2Drive}/>
   <div className="evidence-grid evidence-grid--single"><EvidenceGallery title="Fuel Management — Evidências da Simulação" folderHref={links.lab2EvidenceDrive} folderEmbed={links.lab2EvidenceEmbed}/></div>
   <div className="academic-detail"><h3>Funcionalidades</h3><p className="prose">Desenvolvimento e simulação de um aplicativo de gerenciamento de combustível integrando a lógica criada no ANSYS SCADE Suite com uma interface gráfica desenvolvida no SCADE Display.</p>
    <ul className="compact-list"><li>Abrir e fechar o tanque; selecionar o tipo de combustível; controlar o reabastecimento.</li><li>Aumentar gradualmente o nível e esvaziar o tanque.</li><li>Representar graficamente nível e cor do combustível; indicar tanque cheio ou vazio.</li></ul>
    <h3>Implementação</h3><p className="tech-line">Main · ShowLayer · SetFuelLevel · RepaintFuelLevel · SetFuelColor · SetFuelTankFullVisible · EnableWidgets</p>
    <div className="state-flow"><span>TankClosed</span><b>↕</b><span>TankOpen</span></div>
    <p className="prose">As entradas e saídas foram associadas aos eventos e propriedades dos componentes gráficos por meio do adaptador ARINC 661. O modelo foi verificado utilizando Check Model. Foram corrigidas incompatibilidades envolvendo bool, uint8, uint16, uint32 e as estruturas BoolMsg, IntMsg e IntMsg2.</p>
   </div>
  </section>
 </div></section>
 </>}
