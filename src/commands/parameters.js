module.exports = {
  name: 'parameters',
  alias: ['t'],
  run: async toolbox => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    info(parameters)
  }
}
