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
        return `${this.valueOf()}\n`
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
      internalLink: function (idLink){ 
        return `[${this.valueOf()}](#${idLink})`
      },
      url: function (){ 
        return `<${this.valueOf()}>`
      },
      codeInline: function (){ 
        return `\`${this.valueOf()}\``
      },
      code: function (language=''){ 
        return `\`\`\` ${language}\n ${this.valueOf()}\n\`\`\``
      },
      nav: function (heading){ 
        return `[\`${this.valueOf()}\`](#${heading ? heading : this.valueOf()})`
      },
      toggle: function (container=''){ 
        return `<details>\n<summary>${this.valueOf()}</summary>\n\n\n${container}\n</details>\n\n\n`
      },
      
      // h1: function (){ 
      //    return `# ${this.valueOf()}`
      // },
    }
    Object.entries(mdMethods).forEach(([keyMethod, functionMd])=> String.prototype[keyMethod] = functionMd)
  }


}
