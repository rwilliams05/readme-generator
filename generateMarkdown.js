function generateMarkdown(data) {
    let licenseBadge = renderLicenseBadge(data.license);
    let markdownString = `# ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents 


- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${data.installation}



## Usage
${data.usage}

    

## Contribution
${data.contribution}


## Tests
${data.test}



## License
${licenseBadge}


## Questions

If you have any questions you can contact me here:
>
>Find me on GitHub: [${data.gitHubUser}](github.com/${data.gitHubUser}).
>
>My email address is: ${data.email}.`

    return (markdownString);
};


function renderLicenseBadge(license) {
    let licenseBadge = ""

    switch (license) {

        case "MIT":
            licenseBadge =
                "![License, MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
            break;

        case "Mozilla":
            licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            break;

        case "GNU":
            licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;

        case "Apache":
            licenseBadge =
                "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;

        default:
            licenseBadge = ""
    }
    return (licenseBadge);
}



//function renderLicenseLink(license) { }
//function renderLicenseSection(license) { }
// TODO: Create a function to generate markdown for README




module.exports = generateMarkdown;
