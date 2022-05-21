const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project."
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description of your project."
        },
        {
            type: "input",
            name: "installation",
            message: "Enter installation instructions for your project."
        },
        {
            type: "input",
            name: "usage",
            message: "Enter usage information for your project."
        },
        {
            type: "input",
            name: "contribution",
            message: "Enter contribution guidelines for your project."
        },
        {
            type: "input",
            name: "test",
            message: "Enter test instructions for your project."
        },
        {
            type: "list",
            name: "license",
            message: "Choose the license for your project.",
            choices: ["MIT", "Mozilla", "GNU", "Apache", "BSD"]

        },
        {
            type: "input",
            name: "gitHubUser",
            message: "Enter you GitHub username.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter your email address.",

        }
    ])

    .then(data => {
        const renderReadMe = generateMarkdown(data);
        fs.writeFileSync("test.md", renderReadMe);
    });