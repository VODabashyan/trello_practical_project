import * as chai from 'chai';
let expectChai = chai.expect;
let assert = chai.assert;
import { browser } from '@wdio/globals';
import HomePage from '../po/home.page';
import LoginPage from '../po/loginRegister.page';

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await LoginPage.open('');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it("Logging in with an invalid email", async () => {
        await HomePage.openLoginPage();
        await LoginPage.signUp('testnodejs55555@gmail');
        const errorMessage = await $('//div[@id="email-uid6-error"]');
        assert.equal(await errorMessage.getText(), "Please enter a valid email address");

    });

    it("Logging in with a valid email", async () => {
        await HomePage.openLoginPage();
        await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');
        expectChai(await browser.getTitle()).to.equal("Boards | Trello");
    });
});