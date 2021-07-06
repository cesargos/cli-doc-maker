// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.createFileDocument = async ({ document, name = 'readme.md', folder = './'} ) => {
    
    if (!/\.md$/.test(name)) `${name}.md`;
   
    if (toolbox.filesystem.list(folder).includes(name)){
      const { overwrite } = await toolbox.prompt.ask({
        type: 'confirm',
        name: 'overwrite',
        message: `File "${name}" already exists in that directory. Do you want to overwrite it?` ,
      });
      if (!overwrite){
        name = `${name.replace(/\.md/, '')}_${new Date().getTime()}.md`
      }
    }

    toolbox.fs.writeFile(
      `${folder}${/\.md$/.test(name)? name : name +'.md' }`,
      document.join('\n'),
      function (err) {
        if (err) throw err
      }
    )
   
    toolbox.print.success(`File "${name}" was created in directory "${toolbox.filesystem.cwd() + folder.slice(1,)}" successfully!`)
    
  }
}
