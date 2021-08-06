// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.builderDoc = async  ({ collection, document }) => {

    document.push("<div id='top-document'/>\n\n")

    if(collection.info && collection.info.name)
      document.push(collection.info.name.h1())

    if (collection.info.description)
      document.push(collection.info.description, "\n\n<br><br>\n\n");
    const builderSumary = collection.item.length > 1;

    if (builderSumary){
      collection.item.forEach((item, index) =>toolbox.builderSummary({
        endpoint: item, 
        document,
        index: index + ". "
      }));
      document.push("\n\n<br><br><br>\n\n")
    }
      

    collection.item.forEach(item => toolbox.builderEndpoint({
      endpoint: item, 
      document,
      builderSumary
    }))
    //toolbox.builderEndpoint({ endpoint: collection.obj.item[0] , document })
   
  }


}
