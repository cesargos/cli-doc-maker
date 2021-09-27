# Descrição
A partir de uma collection do Postman é possível criar uma documenação "Readme.md" para o GitHub.

### Necessário fazer no Postman
1. Colocar a descrição da collection.
2. Colocar a descrição de cada endpoint
3. Colocar as descrições dos parametros
  - De onde vem?
  - Do que se trata?
  - O que é?
  - É fixo? => **usar tag -fixed**
  - É opcional? => **usar tag -opt**
4. Caso a request tenha "body" do tipo JSON. Salvar uma response com o nome "-d" substituindo o valor do parâmetro pela descrição.
5. Colocar todas as informações secretas (que não pode aparecer na documentação) em variáveis da collection
6. Salvar Exemplos de resposta dos endpoints
  - Clique em **"Save Response"** e depois em **"Save as example"**
  - ![image](https://user-images.githubusercontent.com/62411535/132254780-85bac47b-2e44-476e-9d3c-e62212ee18a6.png)
  - Coloque um nome **descritivo** para o retorno dessa request (Ex. Sucesso, Faltando parâmetros, CPF não encontrado, Não autenticado) e clique em **"Save Example"**
  - ![image](https://user-images.githubusercontent.com/62411535/132255178-ad729ebc-31b4-4a91-a21c-fdf15d7d803c.png)
7. Dar **Export** na collection na versão 2.1 e nas variáveis de ambiente utilizadas nessa collection
 
# Execução
1. No terminal. Entre na pasta raiz do seu projeto (na qual possui as collections nas pastas internas)
2. rode o comando `doc-maker postman` ou `doc-maker p`
3. Caso tenha mais de uma collection dentro da pasta atual. Selecionar a desejada para a criação da documentação
  - Se preferir pode passar o nome da collection junto com o comando (sintaxe shell). Ex:
  `doc-maker p "nomedoc*"`
4. O documento será criado no mesmo local da collection selecionada. Caso ja exista o arquivo "readme.md", ele irá perguntar se deseja sobrescrever ou gerar um novo (usando timestamp para renomear)

# Instalação 
No seu terminal execute

```
npm install documentation-maker -g
```


[x] - usar um save request como descrição de um body json
[x] - Subistituir o -fixed por algo melhor
[ ] - Variáveis de ambiente em tabela
[ ] - colocar show msg ao passar o mouse nas variáveis de ambiente
[ ] - substituir o texto no exemplo de uso do builder
[ ] - criar tabela para quando for urlencoded no body