// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.createFileDocument = ({ document, name = 'readme', folder = './'} ) => {
    toolbox.fs.writeFile(
      `${folder}${/\.rm$/.test(fileName)? fileName : fileName +'.rm' } `,
      document.join('\n'),
      function (err) {
        if (err) throw err
      }
    )

  }

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "doc-maker" property),
  // doc-maker.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig("doc-maker", process.cwd())
  // }
}
