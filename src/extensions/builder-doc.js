// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.builderDoc =async  ({ collection, document }) => {

    collection.info && collection.info.name && document.push(collection.info.name.h1())
   
  }


}
