# Phase 1 Requirements

Today, we begin the first of a 4-Phase build of the storefront application, written in React. In this first phase, our goal is to setup the basic scaffolding of the application with initial styling and basic behaviors. This initial build sets up the file structure and state management so that we can progressively build this application in a scalable manner.

The following user/developer stories detail the major functionality for this phase of the project.

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- As a user, I want to choose a category and see a list of all available products matching that category.
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

# Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements.

- Create a visually appealing site using Material UI.
- Use a Redux Store to manage the state of categories and items in the store.
- Display a list of categories from state.
- When the user selects (clicks on) a category:
  - Identify that category as selected (change of class/display).
  - Show a list of products associated with the category.

# Application Architecture

Create the Virtual Store application as follows:

- Begin with creating your application using create-react-app.
- Install Material UI as a dependency.
- Write an <App /> component that serves as the container for all sub-components of this application.
  - A <Header /> component which shows the name of your virtual store.
  - A <Footer /> component which shows your copyright and contact information.
  - A <Categories /> component:
    - Shows a list of all categories.
    - Dispatches an action when one is clicked to “activate” it.
  - A <Products /> component:
    - Displays a list of products associated with the selected category.

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/Hcooper23/storefront/actions)
- [front-end application](https://codesandbox.io/p/github/Hcooper23/storefront/main?file=/.gitignore:1,1&workspaceId=d6b0a7b3-fc47-4e4d-b1fa-ce55109e7d9e)

### Collaborators

Class 401d53  

### Setup

#### How to initialize/run your application

- Run `npm i` and then `npm start`

#### Features / Routes

#### Tests

- Run `npm test` to see tests running. (none setup yet)

#### UMLs
![UML36](./Screenshot%202023-07-06%20at%209.10.14%20PM.png)