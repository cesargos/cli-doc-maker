module.exports = {
  name: 'asks',
  description: 'Runs through a kitchen sink of Gluegun tools',
  run: async (toolbox) => {

    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first

    await generate({
      template: 'model.js.ejs',
      target: `models/${name}-model.ts`,
      props: { name: [name,'teste 1','teste 2','teste 3','teste 4','teste 5'] }
    })

    info(`Generated file at models/${name}-model.js`)



  //   const { print, prompt } = toolbox
  //   const askAge = { type: 'input', name: 'age', message: 'How old are you?' }

  //   // multiple choice
  //   const askShoe = {
  //     type: 'select',
  //     name: 'shoe',
  //     message: 'What shoes are you wearing?',
  //     choices: ['Clown', 'Other'],
  //   }
  //   const multiselect = {
  //     type: 'multiselect',
  //     name: 'mult',
  //     message: 'What are your favorite colors?',
  //     choices: ['red', 'blue', 'yellow'],
  //     required: true
  //   }

  //   // ask a series of questions
  //   const questions = [askAge, askShoe]
  //   const { age, shoe, mult } = await toolbox.prompt.ask(multiselect)
    
  //   print.debug({age, shoe, mult })
  //   toolbox.foo()
  },
}