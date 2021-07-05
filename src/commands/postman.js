module.exports = {
  name: 'postman',
  description: 'Generate documentation from the postman collection',
  alias:['p'],
  run: async (toolbox) => {
    const { print, prompt, shell, fs} = toolbox;

    const file = toolbox.parameters.options.path 
      || toolbox.parameters.options.p 
      || toolbox.parameters.options.file 
      || toolbox.parameters.first
      || "";


    if (/\w\.\w/.test(file) && !/\w\.postman_collection\.json$/.test(file)){
      print.error("Incorrect file type");
      print.info('Postman collections file type has the following extension: .postman_collection.json')
      return
    }

 
    if (toolbox.filesystem.separator ==='/')
      print.warning('WARNING: Character "\\" is not supported. Remove it if the file or folder name has.');
    else
      print.warning('WARNING: The separator character "\\" is not supported\nPlease run the command in the same directory as the collection without passing "\\"')
    

    const fileName = /\w\.postman_collection\.json$/.test(file) 
      ? file.replace(/^\//,'./') 
      : ( file 
        ? `${file.replace(/^\//,'./')}.postman_collection.json` 
        : undefined
      )
    

    let collectionFile = null;
    try{
      collectionFile = fileName && toolbox.filesystem.exists(fileName )
        ?  fs.readFileSync( fileName, encoding='utf8')
        : await toolbox.findAndGetPostmanCollection({fileName}); 
    }catch(err){
      if (err === '')
        print.info('Execution was aborted!')
      else
        print.error('Error when trying to read the file!');
      return
    }
    
    if (!collectionFile){
      print.error("Collection not found!");
      print.info("Please check file name and path and then enter its relative path.");
      return
    }

    let collection;
    try{
      collection = JSON.parse(collectionFile)
    }catch{
      print.error('Error when trying to parse the file!');
      return
    }



    //print.info(collection.item[3])
    
    toolbox.markdownOnString();
    const document = [];
    toolbox.builderEndpoint({ endpoint: collection.item[0] , document })
    print.debug(document)

  },
}

