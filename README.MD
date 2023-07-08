# Phase 1 Requirements

In phase 2, we will be adding the “Add to Cart” feature to our application, which will allow our users to not only browse items in the store, but also select them and have them persist in their “shopping cart” for later purchase.

The user stories from Phase 1 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to choose from products in the list and add them to my shopping cart.
- As a user, I want to see the products that I’ve added to my shopping cart in a growing list on the side of the page”.
- As a user, I want to change the quantity of items I intend to purchase in the header. i.e. CART (1)
- As a user, I want to be able to remove an item from my shopping cart.

# Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements and workflow.

- Continue to use Material UI Components for layout and styling.
- Add a “Cart” indicator to the header, like this: Cart (0).
- Create a new Cart component to show the items in the user’s cart.

# Application Architecture

- Add a new component to the page: <SimpleCart />
  - Displays a short list (title only) of products in the cart.
  - This should be present at all times.
- Home Page Operation:
  - When the user selects (clicks on) a category:
    - Identify that category as selected.
    - Show a list of products associated with the category, that have a quantity > 0.
    - Add an “add to cart” button to each product.
  - When a user clicks the “add to cart” button add the item to their cart:
    - In the <SimpleCart /> component, show a running list of the items in the cart (just the titles).
    - Change the (0) indicator in the header to show the actual number of items in the cart.
    - Reduce the number in stock for that product.

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
