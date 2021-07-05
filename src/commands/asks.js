module.exports = {
  name: 'asks',
  description: 'Runs through a kitchen sink of Gluegun tools',
  run: async (toolbox) => {
    const { print, prompt } = toolbox
    const askAge = { type: 'input', name: 'age', message: 'How old are you?' }

    // multiple choice
    const askShoe = {
      type: 'select',
      name: 'shoe',
      message: 'What shoes are you wearing?',
      choices: ['Clown', 'Other'],
    }
    const multiselect = {
      type: 'multiselect',
      name: 'mult',
      message: 'What are your favorite colors?',
      choices: ['red', 'blue', 'yellow'],
      required: true
    }

    // ask a series of questions
    const questions = [askAge, askShoe]
    const { age, shoe, mult } = await toolbox.prompt.ask(multiselect)
    
    print.debug({age, shoe, mult })
    toolbox.foo()
  },
}