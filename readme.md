- [ ] Montar o documento do postman com o básico
- [ ] Incluir menu de navegação entre funções no inicio do documento
- [ ] Criar tabela contendo os paremetros de onde ele vem o que ele faz e se é obrigatorio
- [ ] Sistema avisa quando tem parametros sem descrição e pergunta se quer fazer relatorio
- [ ] Quando tiver coisas faltando na collections => Dar a opção de ignorar e forçar (-f), informar onde é (-i) ou faz relatorio
- [ ] Quando o body for um json desmembrar e montar tabela com os parametros e as descrições a serem preenchidas
- [ ] uso variáveis locais
- [ ] uso de variáveis globais
- [ ] uso de variáveis de ambiente (ver padrão de como é feito hoje) pra montar os dois cenários


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

