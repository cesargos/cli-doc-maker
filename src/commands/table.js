const command = {
  name: 'table',
  run: async toolbox => {
  const { table } = toolbox.print
  table(
    [
      ['First Name', 'Last Name', 'Age'],
      ['Jamon', 'Holmgren', 35],
      ['Gant', 'Laborde', 36],
      ['Steve', 'Kellock', 43],
      ['Gary', 'Busey', 73],
    ],
    { format: 'markdown' },
  );
  table(
    [
      ['First Name', 'Last Name', 'Age'],
      ['Jamon', 'Holmgren', 35],
      ['Gant', 'Laborde', 36],
      ['Steve', 'Kellock', 43],
      ['Gary', 'Busey', 73],
    ],
    { format: 'lean' },
  );
  table(
    [
      ['First Name', 'Last Name', 'Age'],
      ['Jamon', 'Holmgren', 35],
      ['Gant', 'Laborde', 36],
      ['Steve', 'Kellock', 43],
      ['Gary', 'Busey', 73],
    ],
    { format: 'default' },
  )
  }
}

module.exports = command
