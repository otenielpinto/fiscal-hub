---
description: "Task list for API de Classificação Tributária"
---

# Tasks: API de Classificação Tributária

**Input**: Design documents from `/specs/001-class-trib-api/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Garantir estrutura e dependências mínimas

- [x] T001 Criar arquivo repository/classTribRepository.js com função tmp_classTrib
- [x] T002 Criar arquivo routes/classTribRoutes.js
- [x] T003 Garantir dependência express instalada

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Infraestrutura essencial para a feature

- [x] T004 [P] Adicionar registro da rota em app.js: app.use("/classTrib/", classTribRoutes);

---

## Phase 3: User Story 1 - Consulta de Classificação Tributária (P1)

- [ ] T005 [P] [US1] Implementar função tmp_classTrib em repository/classTribRepository.js que retorna o JSON mockado
- [ ] T006 [P] [US1] Implementar rota GET / em routes/classTribRoutes.js que chama tmp_classTrib e retorna resposta
- [ ] T007 [US1] Testar manualmente requisição GET /classTrib/ e validar resposta conforme modelo

---

## Phase 4: User Story 2 - Estrutura Modular e Padrão de Projeto (P2)

- [ ] T008 [P] [US2] Garantir separação de responsabilidades entre app.js, routes/classTribRoutes.js e repository/classTribRepository.js
- [ ] T009 [US2] Validar existência e uso correto dos arquivos e funções

---

## Phase 5: User Story 3 - Robustez e Validação de Dados (P3)

- [ ] T010 [P] [US3] Implementar validação do JSON retornado (estrutura, campos obrigatórios, tratamento de nulos)
- [ ] T011 [US3] Tratar erro do repository: retornar status 500 e mensagem amigável
- [ ] T012 [US3] Testar resposta para dados incompletos ou erro simulado

---

## Phase 6: Polish & Cross-Cutting Concerns

- [ ] T013 [P] Documentar endpoint /classTrib/ e exemplos de resposta no README ou doc dedicado
- [ ] T014 [P] Especificar e documentar formato de resposta para erro 500 (mensagem amigável, estrutura JSON padronizada)
- [ ] T015 Revisar logs e tratamento de erros

---

## Dependencies

- US1 depende de Setup e Foundational
- US2 depende de US1
- US3 depende de US1
- Polish depende de todas as fases anteriores

## Parallel Execution Examples

- T005, T006 podem ser feitos em paralelo
- T010, T011 podem ser feitos em paralelo após US1
- T013, T014 podem ser feitos em paralelo após Polish

## Implementation Strategy

- MVP: US1 completo (endpoint funcional com JSON mockado)
- Incremental: US2 (padrão e modularidade), US3 (validação e robustez), Polish (documentação, logs e formato de erro)

## Formato Validado

- Todos os tasks seguem o formato checklist: checkbox, ID, [P] se paralelo, [USx] se user story, descrição e caminho do arquivo
