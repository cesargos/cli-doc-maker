// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.getFileInfo = ({ file }) => {
    const path = /^\/?\w+\//.test(file) ? file.replace(/(.+)\/.+\.\w+$/,"$1") : '';
    const fileName = /^\/?\w+\//.test(file) ? file.replace(/.+\/(.+)\.?\w*$/,"$1") : file.replace(/(.+)\.?\w+$/,"$1");
    const extension = file.replace(/.+\/.+?\.(\w+)$/,"$1");
    return { path, fileName, extension }
  }

  // enable this if you want to read configuration in from
  // the current folder's package.json (in a "doc-maker" property),
  // doc-maker.config.json, etc.
  // toolbox.config = {
  //   ...toolbox.config,
  //   ...toolbox.config.loadConfig("doc-maker", process.cwd())
  // }
}
