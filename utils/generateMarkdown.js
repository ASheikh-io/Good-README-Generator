// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})
 
  ## Table of Contents:
 
  * [Description](##Description)
  * [Application Use](##usage)
  * [Installation](##Installation)
  * [Test](##Test)
  * [License](##License)
  * [Contribute](##Contribute)
  * [Contact Developer](##Questions)
  * 
  
  ## Description ${data.description}
  ## Istallation ${data.installation}
  ## ${data.license}
  ## ${data.contributions}
  ## ${data.username}
  ## ${data.email}`;
}



module.exports = generateMarkdown;