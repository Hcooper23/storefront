# Phase 1 Requirements

In phase 4, we will be completing work on our Virtual Store by adding two full page views to the application: Product Details and Checkout.

The user stories from Phases 1, 2 and 3 remain unchanged. For this phase, we are now adding the following new user stories to meet the new requirements.

- As a user, I want to see a full detail view of a product so that I can make a more informed choice about purchasing it.
- As a user, I want to view my full cart and initiate the checkout process so that I can purchase my items and have them delivered.

# Technical Requirements / Notes

And as developers, here are the high level development tasks that address the above end user requirements and workflow.

- Add routing to the application.
- Link every product to a page that displays the full product details.
- Link the “Cart” summary in the header to a full shopping cart page with shipping/payment forms.
- Additionally, we will be swapping out our Redux store and replacing it with a store built using Redux Toolkit.

# Application Architecture

- Add <BrowserRouter /> to your application.
  - Create a <Storefront /> component to contain all of the components viewable form the / route.

- Create a new page component: <ProductDetails />.
  - Alter each product on the listing screen to have a new “Product Details” button.
  - When clicked, <Link to...> /products/## where ## is the product ID.
  - On this page, show an expanded view of the product, including placeholders for additional information such as reviews, suggestions, etc.
- Create a new page component: <ShoppingCart />
  - Link to this page from the Cart (x) in the header, on the /cart route.
  - On this page, show:
    - A summary of items in tabular format.
    - A final order total.
    - A form allowing the user to enter their billing/shipping address and credit card information.
    - On submit, simply draw an alert that says “Thank you for your purchase”
      - We will not be processing transactions or storing orders just yet.

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

/////////////////////////////////////////////////////////////////////
