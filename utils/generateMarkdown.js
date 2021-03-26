

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // license is suppose to go at top

  return `# ${data.title}

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributors}

  ## Tests
   
  ${data.tests}

##Questions

If you have questions contact me at ${data.email}.
  `;
}

module.exports = generateMarkdown;
