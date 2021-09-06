const command = {
  name: 'docmaker',
  run: async toolbox => {
    const { print } = toolbox

    print.info('Welcome to your CLI 1')
  }
}

module.exports = command
