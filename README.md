# wdio_BDD_Demo_Intel471

# 1. Test case

- ## Using any public e-commerce(dummy) site provide a test framework that tests the following:

- successfully add two products to cart and assert that the operation is successful
- remove successfully one of them and assert that the result is correct
- remove successfully the remaining one and assert that the result is correct
- try to remove again one of the products expecting a failed test in this case 

<pre><code>Feature: Shopping cart

    Scenario: As a user, I can add and delete product in the cart

        Given I am on the product page
        When I add first product to the cart
        Then I should see one product in the cart
        When I add second product to the cart
        Then I should see two products in the cart
        When I delete first product from cart
        Then I should see second product in the cart
        When I delete second product from cart
        Then There should be zero product in the cart
        # expect a fail step
        When I delete any product from cart
</code></pre>

# 2. Automation tests folder structure
- ## WebdriverIO, Cucumber, NPM to build the automation test framework
- ## we can also evaluate Cypress, Selenium, Playwright to build the automation test framework depends on the requirments from the product.

#### Run `npm install` from command line from the project root folder 
#### Run test with `npm run wdio` from command line
#### You can watch the `UI_BDD_Demo` to see the test execution, test report you can check `test_report.png` or you can visit [test report](https://bdd-test-report.netlify.app/#suites/77cc29c2671cb6631964f761db1fc9b3/bdd2853770e89f7f/)
#### Generate the test report run `allure generate` after the execution of the tests

    ├── features
    │   ├── pageobjects
    │   │   └── Page Object Model
    │   ├── shoppingCart.feature
    │   │   └── test feature file
    │   └── step-definitions
    │       └── step definitions for the test
    ├── wdio.conf.js
    │   └── webdriverio configuration file
    ├── package.json
    ├── allure-report
    └── allure-results
