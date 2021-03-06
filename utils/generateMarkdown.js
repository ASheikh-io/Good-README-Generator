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
  
  ## Description: 
  ${data.description}

  ## Usage:
  ${data.usage}
  
  ## Istallation: ${data.installation}

  ## License:
  [![${data.license}](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})

  ## Contribution:

  ${data.contributions}

  ## Developer: 
  ${data.Name}

  ## Questions:
  Please contact me if you have any questions.
 
  email: [${data.email}](${data.email})
  
  github: [${data.userName}](https://www.github.com/${data.userName})
  `;
}



module.exports = generateMarkdown;