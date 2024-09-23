class BasePage {

    open(path) {
        return browser.url(`https://trello.com/${path}`);
    }
}
export default BasePage;