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
      print.muted('Postman collections file type has the following extension: .postman_collection.json')
      return
    }

 
    if (toolbox.filesystem.separator ==='/')
      print.warning('WARNING: Character "\\" is not supported. Remove it if the file or folder name has.');
    else{
      //'WARNING: The separator character "\\" is not supported\nPlease run the command in the same directory as the collection without passing "\\"')
      print.warning('This version is not available for Windows O.S.!');
      return;
    }
    

    const fileName = /\w\.postman_collection\.json$/.test(file) 
      ? file.replace(/^\//,'./') 
      : ( file 
        ? `${file.replace(/^\//,'./')}.postman_collection.json` 
        : undefined
      )
    

    let collection = null;
    try{
      collection = fileName && toolbox.filesystem.exists(fileName )
        ?  {
          file: fs.readFileSync( fileName, encoding='utf8'),
          path: fileName
        }
        : await toolbox.findAndGetPostmanCollection({fileName}); 
    
    }catch(err){
      if (err === '')
        print.muted('Execution was aborted!');
      else
        print.error('Error when trying to read the file!');
      return
    }
    
    if (!collection){
      print.error("Collection not found!");
      print.muted("Please check file name and path and then enter its relative path.");
      return
    } 

    // print.debug(collection)

    try{
      collection.obj = JSON.parse(collection.file);
      collection.folder = `${/^\w/.test(collection.path) ? './': ''}${collection.path.replace(/[^/]+$/,'')}`;
      collection.name = collection.path.match(/[^/]+$/)[0];
    }catch{
      print.error('Error when trying to parse the file!');
      return
    }


    //print.info(collection.item[3])

   // print.debug(collection)
    
    toolbox.markdownOnString();
    const document = [];
    //toolbox.builderEndpoint({ endpoint: collection.obj.item[0] , document })
    toolbox.builderDoc({ collection: collection.obj, document })
   
    try{
      toolbox.createFileDocument({ document, folder: collection.folder} )

    }catch(err){
      print.error('Error when trying to create the file markdown!');
      print.muted(err);
      return

    }
    //print.debug(document);

  },
}

