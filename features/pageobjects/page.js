/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html), no use this case
    */
    open () {
        return browser.url("https://react-shopping-cart-67954.firebaseapp.com")
    }
}
