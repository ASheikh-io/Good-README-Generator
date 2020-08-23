// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  ## ${data.github}
  
  `;
}



module.exports = generateMarkdown;
