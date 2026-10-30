import { ExternalLink, FileText } from "lucide-react";
import CompactListHeader from "../components/CompactListHeader";
import SectionTitle from "../components/SectionTitle";
import SprintEvidenceCarousel, { SprintEvidenceItem, SprintSpriteFigure } from "../components/SprintEvidenceCarousel";
import DriveFilePreview from "../components/DriveFilePreview";
import "../styles/list4-sprint2.css";

const personalRepositoryUrl = "https://github.com/LeonardoCamargoRossato/ITA-CE235-EmbeddedSystems-RealTime";
const us221ProjectUrl = "https://github.com/orgs/Projeto-SPRB-TR-BD/projects/4/views/1?pane=issue&itemId=272020328&issue=Projeto-SPRB-TR-BD%7CProjeto-SPRB-TR-BD%7C107";
const list4Page = "https://leonardocamargorossato.github.io/ITA-CE235-EmbeddedSystems-RealTime/#/list4";
const sprint2ReportId = "1IStpsYhr1VYVN0uODNDt2q2WidJLI6N8";
const sprint2ReportUrl = `https://drive.google.com/file/d/${sprint2ReportId}/view`;
const rawProcessedGuideId = "16-t_z0elYB_lxDx4RF5XY-rsCLCsl3zv";
const localArchitectureId = "1GOFfQGxtIgRgEW1p3etudt_qrudVdlSk";

const evidenceAtlas = `${import.meta.env.BASE_URL}images/sprint2/us221/us221-evidence-atlas.webp`;
const kanbanImage = `${import.meta.env.BASE_URL}images/sprint2/us221/sprint2-kanban-board.webp`;

const carouselItems: SprintEvidenceItem[] = [
  { label: "Tela1_US221_Aba_Monitor.png", alt: "Tela 1 da US221 — Aba Monitor", spriteIndex: 2 },
  { label: "Tela2_US221_Aba_FluxoDeDados.png", alt: "Tela 2 da US221 — Aba Fluxo de Dados", spriteIndex: 3 },
  { label: "Tela3_US221_Aba_Raw&Storage.png", alt: "Tela 3 da US221 — Aba Raw & Storage", spriteIndex: 4 },
  { label: "Tela3_US221_Aba_Raw&Storage2.png", alt: "Tela 3 da US221 — Aba Raw & Storage, segunda visão", spriteIndex: 5 },
  { label: "Tela3_US221_Aba_Raw&Storage_RAW.png", alt: "Tela 3 da US221 — Raw & Storage RAW", spriteIndex: 6 },
  { label: "Tela3_US221_Aba_Raw&Storage_RAW2.png", alt: "Tela 3 da US221 — Raw & Storage RAW, segunda visão", spriteIndex: 7 },
  { label: "Tela4_US221_Aba_Api&Scade.png", alt: "Tela 4 da US221 — Aba API & SCADE", spriteIndex: 8 },
  { label: "Tela4_US221_Aba_Api&Scade2.png", alt: "Tela 4 da US221 — Aba API & SCADE, segunda visão", spriteIndex: 9 },
  { label: "Kanban — Sprint 2", alt: "Kanban da Sprint 2 do Projeto SPRB-TR/BD", src: kanbanImage },
];

export default function List4() {
  return (
    <div className="list4-sprint2">
      <CompactListHeader list="LIST 4" lab="SPRINT 2" title="Segunda Sprint do Projeto SPRB-TR/BD" />

      <section className="sprint1-meta">
        <div className="container">
          <span>Projeto Acadêmico SPRB-TR/BD</span>
          <strong>28/09 — 30/10/2026</strong>
        </div>
      </section>

      <section className="section sprint1-main">
        <div className="container content-stack content-stack--sprint1">
          <div className="sprint1-contribution-enunciado">
            <article className="contribution-card">
              <span className="eyebrow">Minha contribuição</span>
              <h2>US221 — Telemetry Decoder</h2>
              <p>
                Na Sprint 2, a demonstração da US123 foi evoluída para uma arquitetura local com backend FastAPI,
                persistência RAW/PROCESSED e uma fronteira C preparada para formalizar o contrato de dados entre
                telemetria, sistema legado e ANSYS SCADE.
              </p>
              <div className="card-actions contribution-card__actions">
                <a className="button button--gold" href={personalRepositoryUrl} target="_blank" rel="noopener noreferrer">
                  Repositório GitHub <ExternalLink size={15}/>
                </a>
                <a className="button button--ghost-dark" href={us221ProjectUrl} target="_blank" rel="noopener noreferrer">
                  US221 T1 <ExternalLink size={15}/>
                </a>
                <span className="button button--ghost-dark button--disabled">Subsprint — a confirmar</span>
              </div>
            </article>

            <article className="drive-file-preview-card list4-enunciado-card">
              <div className="drive-file-preview-card__viewer drive-file-preview-card__fallback">
                <FileText size={34}/>
                <span>Enunciado oficial da ListEx 4</span>
              </div>
              <div className="drive-file-preview-card__body">
                <span className="file-type-pill">PDF</span>
                <h3>Enunciado — ListEx 4 / Sprint 2</h3>
                <small className="drive-file-preview-card__filename">list4-enunciado.pdf</small>
                <p>Espaço preparado para o PDF oficial. O arquivo ainda não foi fornecido neste repositório.</p>
                <div className="preview-actions">
                  <span className="button button--secondary button--disabled">PDF a inserir</span>
                </div>
              </div>
            </article>
          </div>

          <div>
            <SectionTitle
              eyebrow="US221"
              title="Demonstração e evidências da Sprint 2"
              description="Relatório consolidado da evolução US123 → US221 e evidências visuais da implementação executada em localhost."
            />
            <div className="sprint2-report-block">
              <DriveFilePreview
                title="Relatório — Evolução US123 → US221"
                fileName="US221_Sprint2_Evolucao_US123_para_US221.pdf"
                description="Arquitetura, diferenças entre as Sprints, backend local, persistência, JSON → struct C e próximos passos."
                fileId={sprint2ReportId}
                fallbackHref={sprint2ReportUrl}
                buttonLabel="Abrir relatório"
                large
              />
            </div>

            <div className="sprint2-main-figures">
              <SprintSpriteFigure
                atlasSrc={evidenceAtlas}
                spriteIndex={0}
                caption="Figura 1: Fluxo e Arquitetura dos dados na US221.png"
                alt="Fluxo e Arquitetura dos dados na US221"
              />
              <SprintSpriteFigure
                atlasSrc={evidenceAtlas}
                spriteIndex={1}
                caption="Figura 2: JSON_para_Struct.png"
                alt="JSON para Struct na US221"
              />
            </div>

            <SprintEvidenceCarousel
              atlasSrc={evidenceAtlas}
              items={carouselItems}
              title="Telas da implementação US221"
            />
          </div>

          <div className="sprint2-supporting-docs-section">
            <SectionTitle
              eyebrow="Documentação técnica"
              title="Arquitetura local e integração RAW / Processed"
              description="Documentos de apoio produzidos na Sprint 2 para registrar a implementação local e orientar a integração das saídas tipadas com o ANSYS SCADE."
            />
            <div className="sprint2-supporting-docs">
              <DriveFilePreview
                title="Guia SCADE — US123 V1 RAW / Processed"
                fileName="Guia_SCADE_US123_V1_RAW_Processed.pdf"
                description="Guia técnico para consumir no ANSYS SCADE as saídas RAW e Processed da V1 local. Explica a ponte C tipada, o mapeamento JSON → struct C, as diferenças entre as estruturas e os passos sugeridos para criar wrappers e operadores externos no SCADE."
                fileId={rawProcessedGuideId}
                fallbackHref={`https://drive.google.com/file/d/${rawProcessedGuideId}/view`}
                buttonLabel="Abrir guia"
                large
                fitMode="width"
              />
              <DriveFilePreview
                title="US123 — Arquitetura V1 Local"
                fileName="US123_V1_Arquitetura_Local.pdf"
                description="Documento arquitetural da implementação executada em localhost. Registra React/Vite, backend FastAPI, persistência RAW em JSONL e Processed em SQLite, endpoints REST, organização de pastas e a fronteira C preparada para integração com o SCADE."
                fileId={localArchitectureId}
                fallbackHref={`https://drive.google.com/file/d/${localArchitectureId}/view`}
                buttonLabel="Abrir arquitetura"
                large
                fitMode="width"
              />
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="GitHub"
              title="Repositório e implementação"
              description="Rastreabilidade enxuta da implementação: Kanban da Sprint 2, atividade US221 T1 e repositório individual da disciplina."
            />
            <div className="sprint2-repository-focus">
              <a className="sprint2-kanban-card" href={us221ProjectUrl} target="_blank" rel="noopener noreferrer">
                <img src={kanbanImage} alt="Kanban da Sprint 2" loading="lazy" />
                <div>
                  <span>SPRINT 2</span>
                  <strong>Kanban — US221</strong>
                  <small>Abrir atividade no projeto da turma <ExternalLink size={13}/></small>
                </div>
              </a>
              <div className="sprint2-repository-links">
                <a className="button button--primary" href={us221ProjectUrl} target="_blank" rel="noopener noreferrer">
                  US221 T1 — Arquitetura e especificação dos contratos e tipos de dados da API <ExternalLink size={15}/>
                </a>
                <a className="button button--secondary" href={personalRepositoryUrl} target="_blank" rel="noopener noreferrer">
                  GitHub — ITA-CE235-EmbeddedSystems-RealTime <ExternalLink size={15}/>
                </a>
              </div>
            </div>
          </div>

          <div>
            <SectionTitle eyebrow="Resumo técnico" title="Implementação" />
            <div className="sprint-tech-grid">
              <article><span>Frontend / monitor</span><strong>React · Vite · TypeScript</strong></article>
              <article><span>Backend local</span><strong>FastAPI · REST · localhost</strong></article>
              <article><span>Persistência</span><strong>RAW em JSONL · PROCESSED em SQLite</strong></article>
              <article><span>Interoperabilidade</span><strong>C bridge · JSON → struct · contrato C/C++</strong></article>
            </div>
            <p className="academic-disclaimer">
              Na Sprint 2 o sistema foi demonstrado localmente. O backend FastAPI e o banco SQLite não foram publicados como serviço web público;
              as bridges C existentes são protótipos de integração e a US221 formaliza o contrato de tipos, assinaturas e compatibilidade com SCADE/legado.
            </p>
          </div>

          <div>
            <SectionTitle
              eyebrow="Fluxo funcional"
              title="Cadeia de processamento da US221"
              description="Da telemetria JSON recebida do Time 1 ao dado validado e disponibilizado para consumidores."
            />
            <div className="sprint2-flow" aria-label="Fluxo funcional da Sprint 2">
              <span><small>TIME 1</small><strong>JSON RAW</strong></span><i>→</i>
              <span><small>INGESTÃO</small><strong>FastAPI</strong></span><i>→</i>
              <span><small>RAW</small><strong>JSONL</strong></span><i>→</i>
              <span><small>CORE</small><strong>Parser · Schema · Range · Sequence</strong></span><i>→</i>
              <span><small>CONTRATO</small><strong>JSON → struct C</strong></span><i>→</i>
              <span><small>PROCESSED</small><strong>SQLite</strong></span><i>→</i>
              <span><small>SAÍDA</small><strong>API / SCADE / consumidores</strong></span>
            </div>
            <p className="flow-note">
              A conversão do JSON bruto para estruturas tipadas é tratada tecnicamente como parsing/deserialização JSON → struct C,
              preparando o dado para o contrato formal da API.
            </p>
          </div>

          <div>
            <SectionTitle eyebrow="Rastreabilidade" title="Rastreabilidade da atividade" />
            <div className="traceability-grid">
              <a href={us221ProjectUrl} target="_blank" rel="noopener noreferrer"><span>US221 / Sprint 2</span><strong>T1 — #107</strong></a>
              <a href={personalRepositoryUrl} target="_blank" rel="noopener noreferrer"><span>Repositório</span><strong>ITA CE-235</strong></a>
              <a href={sprint2ReportUrl} target="_blank" rel="noopener noreferrer"><span>Relatório</span><strong>US123 → US221</strong></a>
              <div className="traceability-grid__pending"><span>Subsprint</span><strong>A confirmar</strong></div>
              <a href={list4Page} target="_blank" rel="noopener noreferrer"><span>Página</span><strong>List 4 / Sprint 2</strong></a>
            </div>
          </div>

          <div>
            <SectionTitle
              eyebrow="Transição"
              title="Dos Labs ao backend da central de terra"
              description="A evolução mantém a continuidade entre os laboratórios SCADE, a demonstração da Sprint 1 e a infraestrutura real planejada para a Sprint 3."
            />
            <div className="knowledge-bridge sprint2-bridge">
              <div><span>LABS</span><strong>SCADE</strong><strong>ARINC 661</strong><strong>Integração</strong></div>
              <i>→</i>
              <div><span>SPRINT 1</span><strong>US123</strong><strong>Demo online</strong><strong>Lógica no navegador</strong></div>
              <i>→</i>
              <div className="knowledge-bridge__target"><span>SPRINT 2</span><strong>US221</strong><strong>FastAPI + SQLite</strong><strong>Contrato C/C++</strong></div>
              <i>→</i>
              <div><span>SPRINT 3</span><strong>Raspberry / Ground Station</strong><strong>Banco do Time 2</strong><strong>API online</strong></div>
            </div>
            <div className="note-card sprint2-next-step">
              <h3>Próxima etapa</h3>
              <p>
                Implantar o backend no Raspberry do Time 2, que funcionará como servidor da central de comando de terra. O sistema deverá receber os JSONs do Time 1,
                validar e converter os dados, persistir no banco evoluído pelo time e disponibilizar os dados processados por API para SCADE, HMI ou outros consumidores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
