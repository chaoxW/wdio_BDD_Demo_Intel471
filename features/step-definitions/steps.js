import { Given, When, Then } from '@wdio/cucumber-framework';

import ProductPage from '../pageobjects/product.page.js';

Given(/^I am on the product page$/, async () => {
    await ProductPage.open();
});

When(/^I add first product to the cart$/, async () => {
    await ProductPage.addFirstProduct();
});

Then(/^I should see (\w+) product in the cart$/, async (num) => {
    await expect(ProductPage.oneProductAdded).toBeExisting();
});

When(/^I add second product to the cart$/, async () => {
    await ProductPage.addSecondProduct();
});

Then(/^I should see two products in the cart$/, async () => {
    await expect(ProductPage.oneProductAdded).toBeExisting();
    await expect(ProductPage.twoProductAdded).toBeExisting();
});

When(/^I delete (\w+) product from cart$/, async (num) => {
    await ProductPage.clickRemoveButton();
});

Then(/^There should be zero product in the cart$/, async () => {
    await expect(ProductPage.zeroProductAdded).toBeExisting
});

When(/^I open the shopping cart$/, async () => {
    await ProductPage.clickCartButton();
});

