// add your CLI-specific functionality here, which will then be accessible
// to your commands

module.exports = toolbox => {
  const builderEndpoint = ({ endpoint, document }) => {
    if ( endpoint && endpoint.item ){ 
      document.push('')
      document.push(endpoint.name.h1());
      if (endpoint.description)
        document.push(`**Descrição:** ${endpoint.description}`.p()) 
      endpoint.item.forEach(item =>builderEndpoint({endpoint: item, document})  )
      document.push('\n***\n\n\n')
           
    }else{
      const {name, request, response} = endpoint;      
      document.push(`1. ${name}`.h2());
      document.push(`**Endpoint:** ${request.url.raw.replace(/\?.*$/,'')}`.p());
      document.push(`**Método:** ${request.method}`.p())
      if (request.description)
        document.push(`**Descrição:** ${request.description}`.p());
      if (request.header && request.header.length > 0) {
        const headersParams = request.header.map(({key,description='',type}) => 
          `${key}|${type}|${description}`
        )
        document.push(
          "Headers".h3(),
          "Chave|Tipo|Descrição",
          "---|---|---",       
          ...headersParams,
          "\n\n"
        )
      }
      if (request.url && request.url.query && request.url.query.length > 0) {
        const bodyParams  = request.url.query.map(({key,description='',disabled=false}) => 
          `${key}|${disabled ||/-opt/.test(description) ? 'Não' : 'Sim'}|${description.replace(/-opt/,'')}` 
        )
        document.push(
          "Query Params".h3(),
          "Param|Obrigatório|Descrição",
          "---|---|---",
          ...bodyParams,
          "\n"  
        )
      }
      if (request.body && request.body.mode) {
        const {body:{ mode }} = request;
        document.push(`**Query Body Type:** ${ mode }`.p())
        
        if (mode === "raw" && typeof request.body[mode] === "string" && request.body[mode].trim().length > 0){
          try{
            let body = JSON.stringify(JSON.parse(request.body[mode].trim()), null, 2);
            document.push(
              "Exemplo de body".toggle(body.code("json"))
            )
          }catch(err){
            document.push(
              "Exemplo de body".toggle(request.body[mode].trim().code())
            )
          }    
          
        }
          
      }

 
    }    
   
   
  }

  toolbox.builderEndpoint = builderEndpoint;
}
