# CE-235 — Sistemas de Tempo Real

Portal acadêmico e portfólio técnico de **Leonardo Camargo Rossato** para a disciplina **CE-235 — Sistemas de Tempo Real**, desenvolvido em **React + Vite + TypeScript**.

O projeto centraliza as atividades da disciplina, ListExes, laboratórios, artefatos, documentação do **Projeto SPRB-TR/BD**, atividades com **ANSYS SCADE** e entregas das Sprints.

## Portal publicado

**CE-235 — Sistemas de Tempo Real:**  
https://leonardocamargorossato.github.io/ITA-CE235-EmbeddedSystems-RealTime/

---

## Sprint 1 — Projeto SPRB-TR/BD

A Sprint 1 documenta a participação no **Time 2 — Segmento Ground** e o desenvolvimento relacionado à **US123**, incluindo o estudo, recepção, parsing, validação e visualização dos dados de telemetria.

- **Página da Sprint 1 / List 3:** https://leonardocamargorossato.github.io/ITA-CE235-EmbeddedSystems-RealTime/#/sprint1
- **Issue / Subsprint #70:** https://github.com/Projeto-SPRB-TR-BD/Projeto-SPRB-TR-BD/issues/70
- **US123 principal #41:** https://github.com/Projeto-SPRB-TR-BD/Projeto-SPRB-TR-BD/issues/41

### US123 — Telemetry Decoder

Como artefato da Sprint 1, foi desenvolvido o **Telemetry Decoder**, um demonstrador acadêmico para representar o fluxo de processamento de telemetria entre a geração dos dados e o Time 2.

A versão inicial utiliza dados simulados e implementa parsing, validação de faixa e sequência e visualização dos resultados. A lógica principal da demonstração roda no navegador e inclui uma implementação C independente preparada como referência para futura integração com SCADE/imported operators.

- **Aplicação publicada:** https://leonardocamargorossato.github.io/US123-Telemetry-Decoder/
- **Repositório:** https://github.com/LeonardoCamargoRossato/US123-Telemetry-Decoder

---

## Sprint 2 — US221 / Telemetry Decoder local

Na **Sprint 2**, o Telemetry Decoder evoluiu da demonstração online da US123 para uma arquitetura executada **localmente em localhost**, com separação entre frontend, backend, persistência e interfaces de integração.

A atividade principal é a **US221 — Arquitetura e especificação dos contratos e tipos de dados da API**, desenvolvida no contexto do **Time 2 — Ground Segment**.

### O que foi implementado

- **Frontend local:** React + Vite + TypeScript;
- **Backend local:** FastAPI executado em `localhost:8000`;
- **Frontend de desenvolvimento:** normalmente executado em `localhost:5173`;
- **API REST** para recepção, consulta e disponibilização da telemetria;
- **Fluxo RAW:** preservação dos dados recebidos e armazenamento local em **JSONL**;
- **Fluxo PROCESSED:** validação, estruturação e armazenamento local em **SQLite**;
- **Validações:** schema, tipos, faixa e sequência;
- **Contrato de dados:** adaptação do JSON recebido para estruturas tipadas em C (`JSON → struct C`);
- **Bridges C:** preparação da fronteira de integração com ANSYS SCADE / código legado;
- **Documentação da API:** endpoints RAW e PROCESSED, Swagger/OpenAPI e ReDoc;
- **Monitor local:** visualização dos últimos pacotes RAW e PROCESSED e do estado do pipeline.

### Arquitetura local da Sprint 2

```text
Time 1 / JSON bruto
        ↓
FastAPI / ingestão
        ↓
 ┌───────────────────────────────┐
 │ RAW                           │
 │ JSON adaptado → JSONL → API   │
 └───────────────────────────────┘
        ↓
Parser / Schema / Types / Range / Sequence
        ↓
JSON → struct C
        ↓
 ┌───────────────────────────────┐
 │ PROCESSED                     │
 │ dados validados → SQLite → API│
 └───────────────────────────────┘
        ↓
SCADE / HMI / outros consumidores
```

Nesta etapa, o sistema foi demonstrado **totalmente em ambiente local**. O backend FastAPI e o banco SQLite ainda não foram publicados como serviços web públicos; a implantação em servidor embarcado fica para a evolução seguinte do projeto.

### Links da Sprint 2

- **Sprint 2 / List 4:** https://leonardocamargorossato.github.io/ITA-CE235-EmbeddedSystems-RealTime/#/list4
- **US221 no projeto da turma:** https://github.com/orgs/Projeto-SPRB-TR-BD/projects/4/views/1?pane=issue&itemId=272020328&issue=Projeto-SPRB-TR-BD%7CProjeto-SPRB-TR-BD%7C107
- **Repositório da disciplina:** https://github.com/LeonardoCamargoRossato/ITA-CE235-EmbeddedSystems-RealTime

---

## Evolução US123 → US221

| Aspecto | Sprint 1 — US123 | Sprint 2 — US221 |
|---|---|---|
| Objetivo | Demonstrador funcional | Arquitetura local e contrato de integração |
| Execução | GitHub Pages / navegador | localhost |
| Frontend | React + Vite + TypeScript | React + Vite + TypeScript |
| Backend | Lógica simplificada no navegador | FastAPI |
| Persistência | Dados simulados | RAW em JSONL + PROCESSED em SQLite |
| API | Simulação funcional | API REST local |
| Integração C | Referência | Bridges e contrato `JSON → struct C` |
| SCADE | Integração futura | Fronteira preparada para integração |

---

## Conteúdo do portal

O site foi estruturado para concentrar e tornar navegáveis os principais artefatos da disciplina:

- ListExes e respectivos relatórios;
- laboratórios e atividades com SCADE;
- documentação do Projeto SPRB-TR/BD;
- Sprints e artefatos técnicos;
- links para repositórios e aplicações publicadas;
- apresentação acadêmica e profissional do autor.

## Stack

- React
- Vite
- TypeScript
- FastAPI
- SQLite
- JSONL
- C / C++
- GitHub Pages
- Git / GitHub

O portal utiliza **HashRouter**, permitindo a navegação pelas páginas internas quando publicado no GitHub Pages.

## Executar o portal localmente

```bash
npm install
npm run dev
```

## Build do portal

```bash
npm run build
npm run preview
```

## Navegação entre os artefatos

- **Portal CE-235:** https://leonardocamargorossato.github.io/ITA-CE235-EmbeddedSystems-RealTime/
- **Sprint 1 / List 3:** https://leonardocamargorossato.github.io/ITA-CE235-EmbeddedSystems-RealTime/#/sprint1
- **Sprint 2 / List 4:** https://leonardocamargorossato.github.io/ITA-CE235-EmbeddedSystems-RealTime/#/list4
- **US123 — Telemetry Decoder:** https://leonardocamargorossato.github.io/US123-Telemetry-Decoder/
- **Repositório US123:** https://github.com/LeonardoCamargoRossato/US123-Telemetry-Decoder
- **US221 / Sprint 2:** https://github.com/orgs/Projeto-SPRB-TR-BD/projects/4/views/1?pane=issue&itemId=272020328&issue=Projeto-SPRB-TR-BD%7CProjeto-SPRB-TR-BD%7C107

## Portfólio

**Portfólio técnico pessoal:**  
https://leonardocamargorossato.github.io/LCR-SolutionsArchitecture-IA-Quantum/#/

## Autor

**Leonardo Camargo Rossato**  
Arquiteto de Soluções · Doutorando no ITA
