const BasePage = require("./base.page");
import {clickElement, setValueElement, browserPause} from '../core/core_operations.js'

class LoginPage extends BasePage {
    emailInputField = '//input[@id="username"]';
    loginSubmitButton = '//button[@id="login-submit"]';
    passwordInputField = '//input[@id="password"]';

    static async login(email, password) {
        await setValueElement(this.emailInputField, email);
        await browserPause(1000);
        await clickElement(this.loginSubmitButton);
        await browserPause(2000);
        await setValueElement(this.passwordInputField, password);
        await clickElement(this.loginSubmitButton);
        await browserPause(1000);
    }
}   

module.exports = LoginPage;