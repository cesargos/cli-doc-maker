// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  const builderEndpoint = ({ endpoint, document }) => {
    if ( endpoint && endpoint.item ){ 
      document.push('')
      document.push(endpoint.name.h2());
      if (endpoint.description)
        document.push(`**Descrição:** ${endpoint.description}`) 
      endpoint.item.forEach(item =>builderEndpoint({endpoint: item, document})  )
      document.push('','***','','','')
           
    }else{
      const {name, request, response} = endpoint;
      document.push(name.h3());
      document.push(`**Endpoint:** ${request.url.raw}`);
    }    
   
   
  }

  toolbox.builderEndpoint = builderEndpoint;
}
