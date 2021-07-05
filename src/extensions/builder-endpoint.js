// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  const builderEndpoint = ({ endpoint, document }) => {
    if ( endpoint && endpoint.item ){
      document.push(endpoint.name.h2())
      endpoint.item.forEach(item =>builderEndpoint({endpoint: item, document})  )
           
    }else{
      const {name, request, response} = endpoint;
      document.push(name.h3());
      document.push(request.url.raw.code())
    }    
   
   
  }

  toolbox.builderEndpoint = builderEndpoint;
}
