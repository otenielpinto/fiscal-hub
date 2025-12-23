src/

# Implementation Plan: Endpoint de Versão do App

**Branch**: `002-version-endpoint` | **Date**: 2025-12-23 | **Spec**: [specs/002-version-endpoint/spec.md](specs/002-version-endpoint/spec.md)
**Input**: Feature specification from `/specs/002-version-endpoint/spec.md`

**Note**: Este plano segue a constituição do Fiscal Hub e o padrão de arquitetura do projeto.

## Summary

Implementar um endpoint GET `/version` que retorna `{ version: "1.0" }` (ou valor real do app), sem autenticação, para verificação rápida da versão em uso. O endpoint deve ser simples, seguro e facilmente testável.

## Technical Context

**Language/Version**: Node.js (>=18)
**Primary Dependencies**: Express
**Storage**: N/A (versão lida do package.json ou constante)
**Testing**: Jest (unitário), Supertest (API)
**Target Platform**: Linux server
**Project Type**: single (monorepo JS)
**Performance Goals**: Resposta <100ms para GET /version
**Constraints**: JSON simples, sem autenticação, sem dados sensíveis
**Scale/Scope**: 1 endpoint, sem dependências externas

## Constitution Check

_GATE: Todos os princípios constitucionais aplicados:_

- API-First: endpoint REST documentado
- Integridade dos Dados: resposta validada, sem dados sensíveis
- Automação e Atualização: endpoint pronto para CI/CD
- Segurança e Conformidade: sem dados sensíveis, padrão seguro
- Observabilidade: logs de acesso e erro

## Project Structure

### Documentação (desta feature)

```text
specs/002-version-endpoint/
├── plan.md
├── spec.md
├── checklists/
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
  versionRoutes.js
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
