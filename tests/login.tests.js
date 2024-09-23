import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expectChai = chai.expect;
const LoginPage = require("../po/login.page");
//import { login } from '../po/login.page';

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    // afterEach(async () => {
    //     await browser.deleteCookies();
    // });

    // it("Logging in with an invalid email", async () => {
    //     const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
    //     await logInButton.waitForClickable();
    //     await logInButton.click();

    //     const signUpButton = await $('//a[text()="Create an account"]');
    //     await signUpButton.waitForClickable();
    //     await signUpButton.click();

    //     await browser.pause(1000);

    //     const emailInputField = await $('//input[@id="email"]');
    //     await emailInputField.click();
    //     await emailInputField.setValue('testnodejs55555@gmail');

    //     const signUpSubmitButton = await $('//button[@id="signup-submit"]');
    //     await signUpSubmitButton.waitForClickable();
    //     await signUpSubmitButton.click();

    //     const errorMessage = await $('//div[@id="email-uid6-error"]');
    //     assert.equal(await errorMessage.getText(), "Please enter a valid email address");

    // });

    it("Logging in with a valid email", async () => {
        const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
        await logInButton.waitForClickable();
        await logInButton.click();

        await browser.pause(1000);

        // const emailInputField = await $('//input[@id="username"]');
        // await emailInputField.click();
        // await emailInputField.setValue('testnodejs55555@gmail.com');
        
        // await browser.pause(1000);

        // const loginSubmitButton = await $('//button[@id="login-submit"]');
        // await loginSubmitButton.waitForClickable();
        // await loginSubmitButton.click();

        // await browser.pause(2000);

        // const passwordInputField = await $('//input[@id="password"]');
        // await passwordInputField.click();
        // await passwordInputField.setValue(',FEVrV9c=Pm%Q=N');

        // await loginSubmitButton.click();

        // await browser.pause(1000);

         await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');


        //expectChai (await browser.getTitle()).to.equal("Boards | Trello");
    });
});