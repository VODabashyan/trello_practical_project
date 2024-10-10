import BasePage from "./base.page.js";
import { clickElement, setValueElement, browserPause } from '../core/core_operations.js'

class LoginPage extends BasePage {
    constructor() {
        super();
        this.signUpSubmitButton = '//button[@id="signup-submit"]';
        this.signUpemailInputField = '//input[@id="email"]';
        this.signUpButton = '//a[text()="Create an account"]';
        this.emailInputField = '//input[@id="username"]';
        this.loginSubmitButton = '//button[@id="login-submit"]';
        this.passwordInputField = '//input[@id="password"]';
        this.dismissTwoStepVerificationButton = '//button[@id="mfa-promote-dismiss"]'
    }

    async signUp(email) {
        await clickElement(this.signUpButton);
        await browserPause(1000);
        await setValueElement(this.signUpemailInputField, email);
        await clickElement(this.signUpSubmitButton);
    }

    async login(email, password) {
        await setValueElement(this.emailInputField, email);
        await browserPause(1000);
        await clickElement(this.loginSubmitButton);
        await browserPause(2000);
        await setValueElement(this.passwordInputField, password);
        await clickElement(this.loginSubmitButton);
        await browserPause(1000);
        await clickElement(this.dismissTwoStepVerificationButton);
    }
}

export default new LoginPage();