// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }

  return `
    <a name="lisc" />
    ## License
    Covered under ${license}
  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }

  return renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
    # ${data.title}

    ## Table of Contents
    1. [Description.](#desc)
    2. [Installation.](#install)
    3. [Usage.](#usage)
    4. [Contributing.](#cont)
    5. [Tests.](#test)
    6. [License.](#lisc)
    7. [Questions.](#ques)

    <a name="desc" />
    ## Description
    ${data.description}

    <a name="install" />
    ## Installation
    ${data.installation} 

    <a name="usage" />
    ## Usage 
    ${data.usage}

    <a name="cont" />
    ## Contributing
    ${data.contributions}

    <a name="test" />
    ## Tests
    ${data.tests}

    ${renderLicenseSection(data.license)}

    <a name="ques" />
    ## Questions
    My GitHub is: ${data.githubName}
    You can find it [here](${data.githubLink})
    You can also email me here: ${data.email}
`;
}

module.exports = generateMarkdown;
