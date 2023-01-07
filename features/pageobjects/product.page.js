

import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */

    get firstProductAddtoCartButton () {
        return $("//body/div[@id='root']/div[1]/main[1]/main[1]/div[1]/div[1]/button[1]");
    }

    get oneProductAdded () {
        return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]");
    }

    get secondProductAddtoCartButton () {
        return $("//body/div[@id='root']/div[1]/main[1]/main[1]/div[1]/div[2]/button[1]");
    }

    get twoProductAdded () {
        return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[2]");
    }

    get productRemoveButton(){
        return $("//body/div[@id='root']/div[1]/div[2]/div[1]/div[2]/div[1]/button[1]");
    }

    get zeroProductAdded () {
        return $("//div[contains(text(),'0')]");
    }

    get cartButton () {
        return $("//body/div[@id='root']/div[1]/div[2]/button[1]");
    }

    async addFirstProduct () {
        await this.firstProductAddtoCartButton.click();
    }

    async addSecondProduct () {
        await this.secondProductAddtoCartButton.click();
    }

    async clickRemoveButton () {
        await this.productRemoveButton.click();
    }

    async clickCartButton () {
        await this.cartButton.click();
    }
}

export default new ProductPage();
