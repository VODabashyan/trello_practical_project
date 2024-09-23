class BasePage {

    open(path) {
        return browser.url(`https://trello.com/${path}`);
    }
}
module.exports = BasePage;