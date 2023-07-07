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
