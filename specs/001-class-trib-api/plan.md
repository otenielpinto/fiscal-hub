src/

# Implementation Plan: API de Classificação Tributária

**Branch**: `001-class-trib-api` | **Date**: 2025-12-23 | **Spec**: [specs/001-class-trib-api/spec.md](specs/001-class-trib-api/spec.md)
**Input**: Feature specification from `/specs/001-class-trib-api/spec.md`

**Note**: Este plano segue a constituição do Fiscal Hub e o padrão de arquitetura do projeto.

## Summary

Implementar um endpoint GET `/classTrib/` que retorna o JSON de classificação tributária conforme modelo fornecido, com fluxo modular: registro em `app.js`, rotas em `routes/classTribRoutes.js` e repository em `repository/classTribRepository.js` (prefixo tmp\_). O JSON é mockado nesta entrega. O código deve ser robusto, validando estrutura e tratando erros.

## Technical Context

**Language/Version**: Node.js (>=18)  
**Primary Dependencies**: Express, (mock)  
**Storage**: Nenhum (dados mockados, função tmp_classTrib)  
**Testing**: Jest (unitário), Supertest (API)  
**Target Platform**: Linux server  
**Project Type**: single (monorepo JS)  
**Performance Goals**: Resposta <200ms para GET /classTrib/  
**Constraints**: JSON idêntico ao modelo, modularidade, sem dados sensíveis  
**Scale/Scope**: 1 endpoint, dados mockados, sem autenticação

## Constitution Check

_GATE: Todos os princípios constitucionais aplicados:_

- API-First: endpoint REST documentado
- Integridade dos Dados: validação de estrutura e campos
- Automação e Atualização: mock, mas pronto para futura automação
- Segurança e Conformidade: sem dados sensíveis, padrão seguro
- Observabilidade: logs de acesso e erro

## Project Structure

### Documentação (desta feature)

```text
specs/001-class-trib-api/
├── plan.md
├── spec.md
├── checklists/
│   └── requirements.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
└── tasks.md
```

### Código-fonte (raiz do repositório)

```text
app.js
routes/
  classTribRoutes.js
repository/
  classTribRepository.js
```

├── services/
├── cli/
└── lib/

tests/
├── contract/
├── integration/
└── unit/

# [REMOVE IF UNUSED] Option 2: Web application (when "frontend" + "backend" detected)

backend/
├── src/
│ ├── models/
│ ├── services/
│ └── api/
└── tests/

frontend/
├── src/
│ ├── components/
│ ├── pages/
│ └── services/
└── tests/

# [REMOVE IF UNUSED] Option 3: Mobile + API (when "iOS/Android" detected)

api/
└── [same as backend above]

ios/ or android/
└── [platform-specific structure: feature modules, UI flows, platform tests]

```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
```
