import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../po/home.page';
import LoginPage from '../po/loginRegister.page';
import BoardPage from '../po/board.page';

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await BoardPage.open('');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it("create a new board", async () => {
        await HomePage.openLoginPage();
        await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');
        await BoardPage.createBoard();
        const pageName = await BoardPage.boardName;
        await should.exist(pageName);

    });

    // it("search for an existing board", async () => {
    //     const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
    //     await logInButton.waitForClickable();
    //     await logInButton.click();

    //     await browser.pause(1000);

    //     const emailInputField = await $('//input[@id="username"]');
    //     await emailInputField.click();
    //     await emailInputField.setValue('testnodejs55555@gmail.com');
        
    //     await browser.pause(1000);

    //     const loginSubmitButton = await $('//button[@id="login-submit"]');
    //     await loginSubmitButton.waitForClickable();
    //     await loginSubmitButton.click();

    //     await browser.pause(1000);

    //     const passwordInputField = await $('//input[@id="password"]');
    //     await passwordInputField.click();
    //     await passwordInputField.setValue(',FEVrV9c=Pm%Q=N');

    //     await loginSubmitButton.click();

    //     await browser.pause(3000);

    //     const searchField = await $('//input[@placeholder="Search"]');
    //     await searchField.waitForClickable();
    //     await searchField.click();
    //     await searchField.setValue("My Board");

    //     const viewAllResults = await $("//span[normalize-space()='View all results']");
    //     await viewAllResults.waitForClickable();
    //     await viewAllResults.click();

    //     const myBoardOption = await $("//span[text()='My Board']");
    //     await myBoardOption.waitForClickable();
    //     await myBoardOption.click();

    //     await browser.pause(3000);

    //     const pageName = await $('//h1[text()="My Board"]');
    //     await should.exist(pageName);
    // });
});