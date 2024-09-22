import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expectChai = chai.expect;

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    it("create a new list in a board", async () => {
        const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
        await logInButton.waitForClickable();
        await logInButton.click();

        await browser.pause(1000);

        const emailInputField = await $('//input[@id="username"]');
        await emailInputField.click();
        await emailInputField.setValue('testnodejs55555@gmail.com');
        
        await browser.pause(1000);

        const loginSubmitButton = await $('//button[@id="login-submit"]');
        await loginSubmitButton.waitForClickable();
        await loginSubmitButton.click();

        await browser.pause(1000);

        const passwordInputField = await $('//input[@id="password"]');
        await passwordInputField.click();
        await passwordInputField.setValue(',FEVrV9c=Pm%Q=N');

        await loginSubmitButton.click();

        await browser.pause(3000);

        const myBoardOption = await $('//div[@title="My Board"]/parent::div');
        await myBoardOption.waitForClickable();
        await myBoardOption.click();

        await browser.pause(1000);

        const newListButton = await $('//button[@data-testid="list-composer-button"]');
        await newListButton.waitForClickable();
        await newListButton.click();

        let listName = "list" + Math.round(Math.random() * 1000);
        const listNameField = await $('//textarea[@placeholder="Enter list name…"]');
        await listNameField.setValue(listName);

        const addListButton = await $('//button[@data-testid="list-composer-add-list-button"]');
        await addListButton.waitForClickable();
        await addListButton.click();

        const createdListName = await $(`//h2[contains(text(), '${listName}')]`);
        await should.exist(createdListName);
    });
});