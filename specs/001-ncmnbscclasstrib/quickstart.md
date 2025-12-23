# quickstart.md – ncmNbsCclasstrib

## Como testar o endpoint ncmNbsCclasstrib

1. Inicie o servidor Node.js normalmente (`node app.js` ou `npm start`)
2. Faça uma requisição GET para:
   - http://localhost:PORT/ncmNbsCclasstrib/
3. A resposta deve ser um JSON idêntico ao do /classTrib/, apenas mudando nomes para NCM/NBS
4. Os dados são lidos da collection MongoDB chamada `tmp_ncm_nbs_cclasstrib`
5. Se não houver dados, a resposta será um array vazio
6. Em caso de erro, a resposta será 500 com mensagem clara

## Exemplo de resposta

```json
[
  {
    "codigoNcmNbs": "12345678",
    "descricao": "Produto exemplo",
    "aliquota": 18.0,
    "tipo": "NCM"
  }
]
```
