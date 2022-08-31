# E2E Tests - Cypress APIs E2E

This project uses [Cypress](https://www.cypress.io) for UI e2e automated testing.

Some additional dependencies:
- [cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)
- [cypress-esbuild-preprocessor](https://github.com/bahmutov/cypress-esbuild-preprocessor)

## Getting Started

### Pre-requisites:

- Node JS v12.7+

### Install project dependencies
Access the project root and execute the command in the terminal

```
npm install
```
### Test execution

For the first time test execution, you can just execute:

    npx cypress open

This command will open a Cypress execution window, showing all Features, grouped by Services/Folder:

*On first time execution, it could take some time to open, until cypress installation/setup.

You can click on one of then to start a test execution.


### Cucumber BDD style test scenarios

This project uses a `cypress-cucumber-preprocessor`, witch means that testing scenarios is wrote in cucumber style BDD using Gherkin language.

If you are not familiar with Cucumber, we recommend reading this [docs](https://cucumber.io/docs/guides/overview).

The “features” files are located on `cypress > e2e > features`, separated by services.
       
	├── cypress
    |   ├── e2e
	│   |    ├── features 
    |   |        └── scenarios.feature
    |   └──...
	└──...

### Page Objects

Page objects is a common practice and widely used by automated testing projects.

It is located on `cypress > support > page_objects` directory, and we use “-page” suffix to files.
           
	├── cypress
	│   ├── support
	│   │   └── page_objects
	|   │       │   ├── home-page.js
    |   │       │   └──...
    |   │       └──...
    |   └──...
	└──...

The idea of use page-objects is to abstract common functions of a pages to avoid duplicated code inside `step definitions`, also to improve code readability.

### DTO pattern

DTO pattern is not a common practice in automated tests projects or even on JavaScript, but it can be a good practice when we are structuring a project that can be increase soon.

The idea of DTO pattern is to have a `Bean objects` that uses JavaScript ES6 classes that have the `request body` contract of a microservice/resource, that can set default values or set fields content when instanced on `step definition`.

## Autor

* **Fernando Baldo** - *GitHub* - [Fernandobaldo](https://github.com/Fernandobaldo)

