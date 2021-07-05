const command = {
  name: 'doc-maker',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your CLI 1')
  }
}

module.exports = command
