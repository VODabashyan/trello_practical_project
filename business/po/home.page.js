import BasePage from "./base.page";
import { clickElement, browserPause } from '../../core/core_operations.js'

class HomePage extends BasePage {
    constructor() {
        super();
        this.logInButton = '//div[contains(@class, "jnMZCI")]/a[text()="Log in"]';
    }

    async openLoginPage() {
        await clickElement(this.logInButton);
        await browserPause(1000);
    }
}

export default new HomePage();