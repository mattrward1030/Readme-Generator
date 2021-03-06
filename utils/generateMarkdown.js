// importing badges file so it can be used in the generate markdown function
const badgelinks = require("./badges")
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // defining data.licenseBadge so the function knows what badge link to use
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

${data.contributors}

## Tests
   
  ${data.tests}

## Questions

 If you have questions contact me at ${data.email}.
 Do a pull request at github.com/${data.username}  if you want to work on this project!
  `;
}
// exporting generateMarkdown to be used in index.js
module.exports = generateMarkdown;
