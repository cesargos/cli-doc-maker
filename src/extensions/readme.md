# Smarkio - Produto VIDA

## New Folder
### ObterListaParcela HML
**Endpoint:** https://hml.portoseguro.com.br/apifinanceiro/financeiro/v1/contratos/obterListaParcela-prd
### ObterListaParcela PROD
**Endpoint:** https://wwws.portoseguro.com.br/apifinanceiro/financeiro/v1/contratos/obterListaParcela-prd
### 2ViaBoletoIFX HML
**Endpoint:** https://tst.portoseguro.com.br/apifinanceiro/financeiro/v1/contratos/segunda-via-boleto-ifx?titulo=7011858203&email=raphael.ishak@portoseguro.com.br
### 2ViaBoletoIFX PROD
**Endpoint:** https://wwws.portoseguro.com.br/apifinanceiro/financeiro/v1/contratos/segunda-via-boleto-ifx-prd?titulo=7011858203&email=raphael.ishak@portoseguro.com.br

***



### Gerar Token Atendimento HML
**Endpoint:** https://apihml.portoseguro.com.br/auth/oauth/v2/token
### Consulta dados Contratos HML
**Endpoint:** https://apihml.portoseguro.com.br/atendimento/whatsapp/v1/dadoscontratos?numDocumento=29624823847
### Gerar Token Atendimento PROD
**Endpoint:** https://api.portoseguro.com.br/auth/oauth/v2/token
### Consulta dados Contratos PRD
**Endpoint:** https://api.portoseguro.com.br/atendimento/whatsapp/v1/dadoscontratos?numDocumento=00242482155
### Dados Gerais
**Endpoint:** https://wwws.portoseguro.com.br/apifinanceiro/financeiro/v1/contratos/consulta-dados-gerais-contrato?tipoIdentificacao=BR2&nroIdentificacao=35388909867&tipoContrato=&idContrato=&nroEndosso=&codigoEmpresa=&codigoOrigem=IVR&idModalidadePesquisa=21
### buscaContratoCarrosel (offline) Copy 2
**Endpoint:** http://0.0.0.0:3000/consultaParcelaVida?sucursal=21&ramo=1391&apolice=346099&susep=3585CJ
### consultaParcelasVida
**Endpoint:** https://api.altu.com.br/centralFinanceiraPorto-dev/consultaParcelaVida
### consultaParcelasVida  local
**Endpoint:** http://0.0.0.0:3000/consultaParcelaVida?sucursal=21&ramo=1391&apolice=346099&susep=3585CJ
### segunda via Local
**Endpoint:** http://0.0.0.0:3000/segundaViaBoletoVida?titulo=6346922436&teste=1
### buscaContrato != vida
**Endpoint:** https://api.altu.com.br/centralFinanceiraPorto-<?$env?>/buscaContrato?IdParceiroNegocios=<?$identification_number1?>&CodTipoProduto=<?$codtipoproduto?>&documento=<? $apolice ?>&tipoContrato=<?$tipoContrato?>&endosso=<?$optin_lista[2]?>