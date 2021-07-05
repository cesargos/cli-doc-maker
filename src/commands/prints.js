const command = {
  name: 'prints',
  run: async toolbox => {
    const { print, table } = toolbox;

    print.info('INFO');
    print.success('SUCCESS');
    print.warning('WARNING');
    print.error('ERROR');
    print.highlight('HIGHLIGHT');
    print.muted('MUTED');
    print.debug('DEBUG');
  }
}

module.exports = command
