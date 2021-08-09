// add your CLI-specific functionality here, which will then be accessible
// to your commands

module.exports = toolbox => {
  const builderEndpoint = ({ endpoint, document, builderSumary = true, builderForAltu = true }) => {
    if ( endpoint && endpoint.item ){ 
      document.push(`\n\n<div id='${endpoint.name.replace(/\. .+$/, '')}' />\n\n`);
      document.push(endpoint.name.h1());
      if (endpoint.description)
        document.push(`**Descrição:** ${endpoint.description}`.p()) 
      endpoint.item.forEach(item =>builderEndpoint({endpoint: item, document})  )
      document.push('\n***\n\n\n')
           
    }else{
      const {name, request, response} = endpoint;     
      document.push(`\n\n<div id='${name.replace(/\. .+$/, '')}' />\n\n`);
      document.push(name.h2());
      document.push(`**Endpoint:** ${request.url.raw.replace(/\?.*$/,'').codeInline()}`.p());
      document.push(`**Método:** ${request.method}`.p())
      if (request.description)
        document.push(`**Descrição:** ${request.description}`.p());

      const altuExample = [
          {
              name: "http_request",
              parameters: {
                  config: {
                      url: request.url.raw.replace(/\?.*$/,''),
                      method: request.method.toUpperCase(),
                  },
                  flavor: "axios",
                  before_action_messages: [
                      "Mensagem_1",
                      "Mensagem_2"
                  ]
              },
              result_variable: `api_${name.replace(/^(\d+\.)+/, '').trim().replace(/\s+/g,'_').replace(/\W+/g,'').replace(/_{2,}/g,'')}`
          }
      ]



      if (request.header && request.header.length > 0) {
        altuExample[0].parameters.config.headers = {}
        const headersParams = request.header.map(({key,description='', type, value }) => {
          altuExample[0].parameters.config.headers[key] = value;
          return `${key}|${value}|${description}`
        });

        document.push(
          "Headers".h3(),
          "Chave|Valor|Descrição",
          "---|---|---",       
          ...headersParams,
          "\n\n"
        )
      }



      if (request.url && request.url.query && request.url.query.length > 0) {
        altuExample[0].parameters.config.params = {}
        const queryParams  = request.url.query.map(({key,description='', value, disabled=false}) => {
          const optional = /-opt/.test(description) || disabled;
          const fixed = /-fixed/.test(description);

          altuExample[0].parameters.config.params[key] = fixed ? value 
          : `<? $${optional ? 'opcional_':''}${description ? description.trim().replace(/-opt|-fixed/g, '').replace(/\s+/g, '_').replace(/\W/g,'') : value} ?>`;

      
          return `${key}|${optional ? 'Não' : 'Sim'}|${description.replace(/-opt/,'')}` 
        });
  

        document.push(
          "Query Params".h3(),
          "Param|Obrigatório|Descrição",
          "---|---|---",
          ...queryParams,
          "\n"  
        )
      }


      if (request.body && request.body.mode) {
        const {body:{ mode }} = request;
        document.push(`**Query Body Type:** ${ mode }`.p())
        
        if (mode === "raw" && typeof request.body[mode] === "string" && request.body[mode].trim().length > 0){
          try{
            let body = JSON.stringify(JSON.parse(request.body[mode].trim()), null, 2);
            altuExample[0].parameters.config.data = JSON.parse(request.body[mode].trim());
            document.push(
              "Exemplo de body".toggle(body.code("json"))
            )
          }catch(err){
            altuExample[0].parameters.config.data = request.body[mode].trim();
            document.push(
              "Exemplo de body".toggle(request.body[mode].trim().code())
            )
          }    
          
        }
          
      }

      if(builderForAltu){ 
        document.push("Exemplo de uso no Builder".toggle(JSON.stringify(altuExample, null, 2 ).code("json")) );
      }

      if (response.length > 1)
        document.push('Exemplo de requisições'.h2())
      else if (response.length > 0)
        document.push('Exemplo de requisição'.h2())

      response.forEach(({ name, status, code, body })=>{

        if(typeof body === "object" && body != null){
          const content = `\n\n**Status:** ${status} - **Code:** ${code}\n\n\n${body[body.mode].code()}\n\n`;
          document.push(name.toggle(content))   
        }else if (typeof body === "string"){
          const content = `\n**Status:** ${status} - **Code:** ${code}\n\n\n${body.code()}\n\n`;
          document.push(name.toggle(content))
        }
      })



      if (builderSumary)
        document.push("\n[> Voltar ao Topo <](#top-document)\n\n<br><br>\n\n")

 
    }    
   
   
  }

  toolbox.builderEndpoint = builderEndpoint;
}
