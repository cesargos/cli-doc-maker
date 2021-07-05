// add your CLI-specific functionality here, which will then be accessible
// to your commands
module.exports = toolbox => {
  toolbox.markdownOnString = ()=> {
    const mdMethods = {
      h1: function (){ 
        return `# ${this.valueOf()}`
      },
      h2: function (){ 
        return `## ${this.valueOf()}`
      },
      h3: function (){ 
        return `### ${this.valueOf()}`
      },
      p: function (){ 
        return this.valueOf()
      },
      bold: function (){ 
        return `**${this.valueOf()}**`
      },
      italic: function (){ 
        return `*${this.valueOf()}*`
      },
      blockquotes: function (){ 
        return '> ' + this.valueOf().replace(/\n/g,'\n> ')
      },
      ol: function (){ 
        return this.valueOf().trim().split('\n').map((t,index)=>`${index+1}. ${t}`).join('\n');
      },
      ul: function (){ 
        return '+ ' + this.valueOf().replace(/\n/g,'\n+ ')
      },
      link: function ({href, title}){ 
        return `[${this.valueOf()}](${href}${title ? ` "${title}"` : ''})`
      },
      url: function (){ 
        return `<${this.valueOf()}>`
      },
      codeInline: function (){ 
        return `\`${this.valueOf()}\``
      },
      code: function (language){ 
        return `\`\`\` ${language? language : ''}\n ${this.valueOf()}\n\`\`\``
      },
      nav: function (heading){ 
        return `[\`${this.valueOf()}\`](#${heading ? heading : this.valueOf()})`
      },
      // h1: function (){ 
      //    return `# ${this.valueOf()}`
      // },
    }
    Object.entries(mdMethods).forEach(([keyMethod, functionMd])=> String.prototype[keyMethod] = functionMd)
  }


}
