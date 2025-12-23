# Tasks: ncmNbsCclasstrib

**Input**: specs/001-ncmnbscclasstrib/ (plan.md, spec.md, data-model.md, contracts/)

---

## Phase 1: Setup (Shared Infrastructure)

- [x] T001 [P] Criar arquivo de rotas em routes/ncmNbsCclasstribRoutes.js
- [x] T002 [P] Criar arquivo de controller em controller/ncmNbsCclasstribController.js
- [x] T003 [P] Criar arquivo de repository em repository/ncmNbsCclasstribRepository.js

---

## Phase 2: Foundational (Blocking Prerequisites)

- [x] T004 [P] Adicionar registro da rota no app.js com app.use("/ncmNbsCclasstrib/", ncmNbsCclasstribRoutes)
- [ ] T005 [P] Garantir conexão MongoDB e acesso à collection tmp_ncm_nbs_cclasstrib em infra/mongoClient.js

---

## Phase 3: User Story 1 - Consulta de NCM/NBS Classificação Tributária (Priority: P1) 🎯 MVP

**Goal**: Permitir consulta GET para /ncmNbsCclasstrib/ retornando JSON conforme modelo

**Independent Test**: GET /ncmNbsCclasstrib/ retorna JSON esperado ou array vazio

- [ ] T006 [P] [US1] Implementar método getAll no controller/ncmNbsCclasstribController.js
- [ ] T007 [P] [US1] Implementar método findAll no repository/ncmNbsCclasstribRepository.js para buscar na collection tmp_ncm_nbs_cclasstrib
- [ ] T008 [US1] Implementar rota GET em routes/ncmNbsCclasstribRoutes.js chamando controller
- [ ] T009 [US1] Garantir resposta array vazio se não houver dados
- [ ] T010 [US1] Garantir resposta 500 e mensagem clara em caso de erro

---

## Phase 4: User Story 2 - Estrutura Modular e Padrão de Projeto (Priority: P2)

**Goal**: Garantir separação de responsabilidades e aderência ao padrão do projeto

**Independent Test**: Estrutura de arquivos e fluxo conforme padrão

- [ ] T011 [P] [US2] Validar que controller só acessa repository, não diretamente o banco
- [ ] T012 [P] [US2] Validar que rotas só acessam controller
- [ ] T013 [US2] Garantir nomes e caminhos dos arquivos conforme padrão

---

## Phase 5: User Story 3 - Robustez e Validação de Dados (Priority: P3)

**Goal**: Garantir que o JSON retornado está sempre no formato correto, mesmo com dados incompletos

**Independent Test**: Simular dados incompletos e verificar resposta válida

- [ ] T014 [US3] Implementar tratamento de campos nulos ou ausentes no controller
- [ ] T015 [US3] Garantir que todos os campos aceitam null se dados incompletos
- [ ] T016 [US3] Testar resposta com dados incompletos e validar estrutura

---

## Phase 6: Polish & Cross-Cutting

- [ ] T017 [P] Documentar endpoint e exemplos de resposta em quickstart.md
- [ ] T018 [P] Garantir logging de erros e requisições conforme padrão do projeto
- [ ] T019 [P] Revisar código para garantir ausência de dados sensíveis na resposta

---

## Dependencies

- Fases 1 e 2 são pré-requisito para qualquer user story
- US1 pode ser entregue como MVP independente
- US2 e US3 podem ser executadas em paralelo após US1

## Paralelismo

- T001, T002, T003 podem ser feitos em paralelo
- T004 e T005 podem ser feitos em paralelo
- T006 e T007 podem ser feitos em paralelo após fundação
- US2 e US3 podem ser paralelos após US1

## MVP

- US1 (T006-T010) é o escopo mínimo viável
