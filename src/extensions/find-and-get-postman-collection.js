// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.findAndGetPostmanCollection =async  ({ fileName = "*.postman_collection.json" }) => {
    const collectionsFound = toolbox.shell.exec(`find ./ -name "${fileName}"`).stdout.trim().split('\n');






    
    // toolbox.print.debug(collectionsFound)
    // return 'ok'
    //const fileNameRegex = new RegExp(`^${pathAndName ? pathAndName.replace(/\./g,'\\.' ): '.+\\.postman_collection\\.json'}$`) ;   
    
    // const collectionsFound = [];
    // toolbox.shell.ls().forEach(firstLayerOfFolders =>{
    //   if (fileNameRegex.test(firstLayerOfFolders)) {
    //     collectionsFound.push(`./${firstLayerOfFolders}`)
    //   }else if (/^[\w-]+$/.test(firstLayerOfFolders) && firstLayerOfFolders !== 'node_modules'){

    //     toolbox.shell.ls(firstLayerOfFolders).forEach(secondLayerOfFolders =>{
    //       if (fileNameRegex.test(secondLayerOfFolders)) {
    //         collectionsFound.push(`./${firstLayerOfFolders}/${secondLayerOfFolders}`);
            
    //       }else if (/^[\w-]+$/.test(secondLayerOfFolders) && secondLayerOfFolders !== 'node_modules') {
    //         toolbox.shell.ls(`./${firstLayerOfFolders}/${secondLayerOfFolders}`).forEach(thirdLayerOfFolders=>{
    //           if (fileNameRegex.test(thirdLayerOfFolders)) collectionsFound.push(`./${firstLayerOfFolders}/${secondLayerOfFolders}/${thirdLayerOfFolders}`);
    //         })
    //       }
    //     })
        
    //   }
    // })




    //if (collectionsFound.length === 0 ) return null;

    if (collectionsFound.length < 2 ) return collectionsFound[0] 
      ? {
        file: toolbox.fs.readFileSync( collectionsFound[0], encoding='utf8'),
        path: collectionsFound[0]
      } 
      : null;

    const { select: pathAndNameSelect } = await toolbox.selectInput({ 
      message: "Choose the collection from which you want to generate the documentation: ", 
      choices: collectionsFound 
    })
    return {
      path: pathAndNameSelect,
      file: toolbox.fs.readFileSync( pathAndNameSelect, encoding='utf8')
    }
  }


}
