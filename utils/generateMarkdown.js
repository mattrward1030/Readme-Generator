
const badgelinks = require("./badges")
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.licenseBadge = badgelinks[data.license];
  // license is suppose to go at top

  return `# ${data.title}


${data.licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Features](#features)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  I am usng the ${data.license} license

  ## Features
 ${data.features}
 
## Contributing

do a pull request at github.com/${data.username}  if you want to work on this project!

  ## Tests
   
  ${data.tests}

## Questions

 If you have questions contact me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
