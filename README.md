# Fiscal Hub

## Descrição

Este projeto disponibiliza, via API, tabelas auxiliares essenciais para o ecossistema da reforma tributária, facilitando a integração, automação e atualização de dados fiscais em sistemas empresariais.

### Funcionalidades Principais

- **Consulta de Tabelas Auxiliares:** Disponibiliza endpoints para acesso a tabelas fiscais relevantes para a reforma tributária.
- **Integração com Bancos de Dados:** Permite sincronização e atualização automática das tabelas a partir de fontes oficiais.
- **Automação de Processos:** Facilita a automação de rotinas fiscais e tributárias, reduzindo erros manuais.
- **Atualização Periódica:** Garante que as informações estejam sempre atualizadas conforme publicações oficiais.

### Tecnologias Utilizadas

- **Node.js:** Backend para manipulação de dados e exposição das APIs.
- **Express:** Framework para criação das rotas e middlewares.
- **MongoDB:** Armazenamento das tabelas e logs de atualização.
- **Node-Firebird:** Integração com bancos Firebird para importação de dados.
- **Axios:** Consumo de APIs externas e fontes oficiais.
- **Zod:** Validação de dados recebidos e enviados.
- **Winston & Morgan:** Log e monitoramento das operações.
- **Helmet & CORS:** Segurança e controle de acesso.
- **dotenv & dotenv-safe:** Gerenciamento de variáveis de ambiente.
- **node-schedule:** Agendamento de tarefas automáticas.
- **express-async-errors, http-errors, xml2js, uuid:** Suporte a erros, manipulação de XML e identificação única.

### Benefícios

- **Centralização de Dados:** Facilita o acesso a informações fiscais em um único ponto.
- **Redução de Erros:** Minimiza inconsistências e retrabalho por meio de automação e validação.
- **Eficiência Operacional:** Automatiza processos repetitivos e garante dados sempre atualizados.
- **Escalabilidade:** Estrutura preparada para expansão de novas tabelas e integrações futuras.

### Referências e Links Úteis

- [Portal CFF - SVRS](https://dfe-portal.svrs.rs.gov.br/Cff)
- [ACBrLib](https://acbr.sourceforge.io/ACBrLib/BemVindo.html)
- [Calculadora CBS - Receita Federal](https://piloto-cbs.tributos.gov.br/servico/calculadora-consumo/calculadora)
- [API Classificação Tributária - SVRS](https://cff.svrs.rs.gov.br/api/v1/consultas/classTrib)
- [Exemplos RTC - Unimake](https://www.unimake.com.br/uninfe/modelos.php?p=nfe_nfce_4_00%2FNFe%2FExemplos+RTC)
