// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.builderDoc = async  ({ collection, document }) => {

    collection.info && collection.info.name && document.push(collection.info.name.h1())
    collection.item.forEach(item => toolbox.builderEndpoint({endpoint: item, document }))
    //toolbox.builderEndpoint({ endpoint: collection.obj.item[0] , document })
   
  }


}
