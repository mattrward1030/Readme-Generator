
const badgelinks = require("./badges")
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  data.licenseBadge = badgelinks[data.license];
  // license is suppose to go at top

  return `# ${data.title}


${data.licenseBadge}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  I am usng the ${data.license} license

  ## Contributing

  ${data.contributors}

  ## Tests
   
  ${data.tests}

## Questions

 If you have questions contact me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
