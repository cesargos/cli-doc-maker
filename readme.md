- [ ] Montar o documento do postman com o básico
- [ ] Incluir menu de navegação entre funções no inicio do documento
- [ ] Numerar os nomes das APIs e o Navegador
- [ ] Incluir link voltar ao menu de navegação ao final de cada função
- [ ] Criar tabela contendo os paremetros de onde ele vem o que ele faz e se é obrigatorio
- [ ] Sistema avisa quando tem parametros sem descrição e pergunta se quer fazer relatorio
- [ ] Quando tiver coisas faltando na collections => Dar a opção de ignorar e forçar (-f), informar onde é (-i) ou faz relatorio
- [ ] Quando o body for um json desmembrar e montar tabela com os parametros e as descrições a serem preenchidas
- [ ] uso variáveis locais
- [ ] uso de variáveis globais
- [ ] uso de variáveis de ambiente (ver padrão de como é feito hoje) pra montar os dois cenários
- [ ] Incluir parametros para setar o idioma
- [ ] retornos com codigo 200 ter toggle com exemplo de uso no bot

# navegador

*******
Tabelas de conteúdo 
 1. [O que é Markdown?](#whatismarkdown)
 2. [Porque usar Markdown?](#why)
 3. [Ferramentas para Markdown](#tools)
 4. [Sintaxe de Markdown](#syntax)

*******

<div id='whatismarkdown'/>  

## O que é Markdown ?  
De acordo com a Wikipedia :  

  >*Markdown é uma linguagem de marcação leve com sintaxe de formatação de texto simples projetada para que ela possa ser convertida em HTML e muitos outros formatos usando uma ferramenta com o mesmo nome. Markdown é usado frequentemente para formatar arquivos readme, para escrever mensagens em fóruns de discussão on-line e para criar texto rico usando um editor de texto simples.*   


`SIMPLESMENTE: É APENAS OUTRO TIPO DE ARQUIVO DE TEXTO, COMO .txt .doc .... (agora é .md :risos:) E COM UMA SINTAXE ESPECIAL.`  
<div id='why'/>  






# sitação 


  >*Markdown é uma linguagem de marcação leve com sintaxe de formatação de texto simples projetada para que ela possa ser convertida em HTML e muitos outros formatos usando uma ferramenta com o mesmo nome. Markdown é usado frequentemente para formatar arquivos readme, para escrever mensagens em fóruns de discussão on-line e para criar texto rico usando um editor de texto simples.*   

# Inserir imagens 
![](http://i.imgur.com/IMTN5cy.png)  

# Tabelas
Coluna 1 | col 2 | col 3 | col 4
---|---|---|---
1| teste1|teste2|teste3
2|teste|teste|teste

# doc-maker CLI

A CLI for doc-maker.

## Customizing your CLI

Check out the documentation at https://github.com/infinitered/gluegun/tree/master/docs.

## Publishing to NPM

To package your CLI up for NPM, do this:

```shell
$ npm login
$ npm whoami
$ npm lint
$ npm test
(if typescript, run `npm run build` here)
$ npm publish
```

# License

MIT - see LICENSE

