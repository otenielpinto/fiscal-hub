# quickstart.md – 002-version-endpoint

## Como testar o endpoint de versão

1. Inicie o servidor:
   ```sh
   node app.js
   ```
2. Faça uma requisição GET para `/version`:
   ```sh
   curl http://localhost:3000/version
   ```
3. Resposta esperada:
   ```json
   { "version": "1.0" }
   ```

- O valor de `version` é lido do `package.json`.
- Não é necessário autenticação.
- Endpoint disponível em todos os ambientes.
