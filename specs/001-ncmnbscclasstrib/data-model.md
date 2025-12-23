# data-model.md – ncmNbsCclasstrib

## Entidade principal: ncmNbsCclasstrib

- Descrição: Objeto principal do JSON de resposta do endpoint
- Identificador único: codigoNcmNbs
- Collection interna: tmp_ncm_nbs_cclasstrib (nome exato da collection MongoDB)
- Campos:
  - codigoNcmNbs (string, obrigatório, único)
  - descricao (string, obrigatório)
  - aliquota (number, obrigatório)
  - tipo (string, obrigatório, "NCM" ou "NBS")
  - outros campos conforme modelo do /classTrib/, adaptados para NCM/NBS

## Relacionamentos

- Nenhum relacionamento externo

## Validações

- codigoNcmNbs: não nulo, único
- descricao: não nulo
- aliquota: não nulo
- tipo: "NCM" ou "NBS"
- Todos os campos devem aceitar null se dados incompletos
