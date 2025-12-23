# research.md – ncmNbsCclasstrib

## Decision 1: Modelo JSON

- Decision: Usar modelo idêntico ao /classTrib/, apenas mudando nomes para NCM/NBS
- Rationale: Padronização, menor ambiguidade, integração facilitada
- Alternatives considered: Estrutura própria, modelo flexível

## Decision 2: Volume de dados

- Decision: Dezenas a centenas de registros
- Rationale: Tabelas fiscais normalmente têm esse porte, não exige paginação
- Alternatives considered: Milhares (exigiria paginação e performance extra)

## Decision 3: Identificador único

- Decision: Código NCM/NBS é o identificador único
- Rationale: Padrão em tabelas fiscais, facilita deduplicação e integrações
- Alternatives considered: Composto, sem identificador

## Constitution Check

- API-First: Mantido (REST, GET, sem breaking change)
- Integridade dos Dados: Validação de campos obrigatórios e nulos
- Automação: Não aplicável (mock/static)
- Segurança: Sem auth, pois é público e estático
- Observabilidade: Logging padrão do projeto

## Out of Scope

- Paginação
- Autenticação
- Integração com fontes externas
- Atualização automática

## Open Questions

- Nenhuma pendência
