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
- ## We can also evaluate Cypress, Selenium, Playwright to build the automation test framework depends on the requirments from the product.

#### Build project from command line from the project root folder 
```console 
$ npm install 
``` 

#### Run test from command line 
```console 
$ npm run wdio
```

#### You can watch the [UI_BDD_Demo.mov](https://drive.google.com/file/d/1qTfpk2wTFDw95R7VL6_PXak4IL_5a1Fw/view?usp=share_link) to see the test execution

[![UI_BDD_Demo](https://res.cloudinary.com/marcomontalbano/image/upload/v1673211916/video_to_markdown/images/google-drive--1qTfpk2wTFDw95R7VL6_PXak4IL_5a1Fw-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://drive.google.com/file/d/1qTfpk2wTFDw95R7VL6_PXak4IL_5a1Fw/view?usp=share_link "UI_BDD")

#### Test report you can check `test_report.png` or you can visit [test report](https://bdd-test-report.netlify.app/#suites/77cc29c2671cb6631964f761db1fc9b3/bdd2853770e89f7f/)
<img width="1646" alt="image" src="https://user-images.githubusercontent.com/38011268/211156572-690ec52e-a902-482d-b833-032ebd8c2ce0.png">

#### Generate the test report after the execution of the tests 
```console 
$ allure generate
```

#### Project structure 

    ????????? features
    ???   ????????? pageobjects
    ???   ???   ????????? Page Object Model
    ???   ????????? shoppingCart.feature
    ???   ???   ????????? test feature file
    ???   ????????? step-definitions
    ???       ????????? step definitions for the test
    ????????? wdio.conf.js
    ???   ????????? webdriverio configuration file
    ????????? selenium-4-grid.yml
    ???   ????????? run test from selenium 4 grid with docker config
    ????????? package.json
    ????????? allure-report
    ????????? allure-results
    
# 3. Run test from Selenium 4 grid with Docker

#### Start the service

```console 
$ docker-compose -f ./selenium-4-grid.yml up
```

#### [Selenium 4 grid dashboard](http://localhost:4444/ui/index.html#/)

<img width="1643" alt="image" src="https://user-images.githubusercontent.com/38011268/211156476-4f183e2f-6d0c-4a94-a258-90ebcf3d0e99.png">


#### Run test from command line 
```console 
$ npm run wdio
```

#### Generate the test report after the execution of the tests and check [test report](https://bdd-test-report.netlify.app/#suites/77cc29c2671cb6631964f761db1fc9b3/bdd2853770e89f7f/)
```console 
$ allure generate
```

#### If the website is not stable you can clone this [repository](https://github.com/jeffersonRibeiro/react-shopping-cart), then change the base url with localhost
```console 
/* First, Install the needed packages */
$ npm install

/* Then start the React app */
$ npm start

/* To run the tests */
$ npm run test
```
