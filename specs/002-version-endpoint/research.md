# research.md – 002-version-endpoint

## Decision: Como expor a versão do app via endpoint?

- O endpoint `/version` deve retornar um JSON simples com a versão do app.
- A versão pode ser lida diretamente do `package.json` (campo `version`) para evitar divergência manual.
- Alternativa: hardcodear a versão em um arquivo JS, mas isso exige atualização manual a cada release.
- O endpoint não requer autenticação e não expõe dados sensíveis.

## Rationale

- Ler do `package.json` garante que a versão exibida reflete o build atual, reduzindo risco de inconsistência.
- Endpoint simples, fácil de testar e monitorar.
- Segue padrão REST e boas práticas de APIs públicas.

## Alternatives considered

- Hardcodear a versão em um arquivo JS (ex: `const version = '1.0'`).
- Usar variável de ambiente para definir a versão.
- Expor via header HTTP ao invés de body JSON.

## Conclusão

- Optou-se por ler a versão do `package.json` para garantir sincronização automática.
- O endpoint `/version` retorna `{ version: "<versão>" }`.
- Não há dependências externas além do Node.js/Express.
