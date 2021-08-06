// add your CLI-specific functionality here, which will then be accessible
// to your commands

module.exports = toolbox => {
  const builderSummary = ({ endpoint, document, index }) => {
    if ( endpoint && endpoint.item ){ 
      const nextIndex = index.replace(/\d+(?=\.\s$)/, parseInt(index.match(/\d+(?=\.\s$)/)[0]) + 1);
      const edent = index.match(/\d+\./g).map(_=> '').join('  ') + '* ';

      endpoint.name = nextIndex + endpoint.name;
      document.push(edent + endpoint.name.internalLink(endpoint.name.replace(/\. .+$/, '')) );
      endpoint.item.forEach((item, index ) =>builderSummary({
        endpoint: item, 
        document, 
        index: nextIndex.replace(/(?=\.\s$)/,'.'+index)
      })  )           
    }else{     
      const nextIndex = index.replace(/\d+(?=\.\s$)/, parseInt(index.match(/\d+(?=\.\s$)/)[0]) + 1);
      const edent = index.match(/\d+\./g).map(_=> '').join('  ') + '* ';

      endpoint.name = nextIndex + endpoint.name;
      document.push(edent + endpoint.name.internalLink(endpoint.name.replace(/\. .+$/, '')) );
    }    
   
   
  }

  toolbox.builderSummary = builderSummary;
}
