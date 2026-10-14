import CompactListHeader from "../components/CompactListHeader";
import DriveFolderPreview from "../components/DriveFolderPreview";
import EvidenceGallery from "../components/EvidenceGallery";
import ReportPdfViewer from "../components/ReportPdfViewer";
import {links} from "../data/links";
export default function List2(){return <>
 <CompactListHeader list="LIST 2" lab="LAB 3" title="Integração entre Aplicações"/>
 <section className="section dashboard-section"><div className="container content-stack content-stack--compact">
  <section id="lab3" className="lab-dashboard">
   <div className="lab-dashboard__title"><span>LAB 3</span><h2>Integração Team1 ↔ Team2</h2></div>
   <div className="dashboard-materials">
    <DriveFolderPreview title="Arquivos do Lab 3" description="Pasta oficial com projetos, relatórios, arquivos compactados e demais entregáveis existentes do Lab 3." href={links.lab3Drive} embed={links.lab3Embed} buttonLabel="Abrir pasta do Lab 3"/>
   </div>

   <ReportPdfViewer title="Relatório do Lab 3" fileName="Relatorio_Lab3_LeonardoRossato.pdf" description="Integração entre aplicações utilizando ANSYS SCADE Suite e ARINC 661." fileId={links.lab3ReportPdfId} fallbackHref={links.lab3Drive}/>

   <div className="lab3-evidence-grid">
    <EvidenceGallery title="Prints das pastas" folderHref={links.lab3EvidenceFoldersDrive} folderEmbed={links.lab3EvidenceFoldersEmbed}/>
    <EvidenceGallery title="Project 1" folderHref={links.lab3Project1Drive} folderEmbed={links.lab3Project1Embed}/>
    <EvidenceGallery title="Project 2" folderHref={links.lab3Project2Drive} folderEmbed={links.lab3Project2Embed}/>
   </div>

   <div className="academic-detail">
    <div className="network-flow"><div><b>TEAM 1</b><span>SCADE / ARINC 661</span><small>TCP 1231</small></div><strong>UDP Multicast<br/>224.255.255.255 · UDP 12340<br/>↕</strong><div><b>TEAM 2</b><span>SCADE / ARINC 661</span><small>TCP 1232</small></div></div>
    <h3>Objetivo e funcionamento</h3><p className="prose">Integração entre duas aplicações independentes, Team1 e Team2. Cada aplicação possui uma interface gráfica ARINC 661 com botão de envio e indicador de recebimento. Quando uma mensagem é recebida, um operador Toggle alterna o estado do indicador.</p>
    <div className="fact-grid"><div><b>Interface</b><span>SCADE Display</span></div><div><b>Lógica</b><span>SCADE Suite</span></div><div><b>Código</b><span>C gerado pelo KCG</span></div><div><b>Integração</b><span>UA Adaptor</span></div></div>
    <h3>Testes e resultados</h3><p className="prose">Foram realizados testes de comunicação nos dois sentidos. Os terminais apresentaram as mensagens “Sent” e “Received”. Foi identificado que GREEN e RED do Team1 haviam sido inicialmente gerados com o mesmo valor. Após a correção para GREEN = 51 e RED = 21 e nova geração e compilação do código, o indicador passou a representar corretamente os dois estados.</p>
    <h3>Conclusão</h3><p className="prose">Os testes confirmaram que as duas aplicações conseguem enviar e receber mensagens, processar os sinais recebidos e atualizar seus respectivos displays, alcançando o comportamento esperado para a comunicação bidirecional.</p>
   </div>
  </section>
 </div></section>
 </>}