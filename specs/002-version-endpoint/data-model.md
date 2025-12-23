# data-model.md – 002-version-endpoint

## Entidade: VersionResponse

| Campo   | Tipo   | Obrigatório | Descrição                 |
| ------- | ------ | ----------- | ------------------------- |
| version | string | Sim         | Versão do app (ex: '1.0') |

- Não há validação complexa: apenas garantir que `version` é uma string não vazia.
- Fonte: campo `version` do `package.json`.
- Não há relacionamentos ou transições de estado.
