Feature: Shopping cart

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
