import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expectChai = chai.expect;

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    it("create a new card in a list", async () => {
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

        const addNewCardButtoon = await $('//li[@data-list-id="66a8f615fa9135d777c6dd5e"]//button[@data-testid="list-add-card-button"]');
        await addNewCardButtoon.waitForClickable();
        await addNewCardButtoon.click();

        let cardName = "card" + Math.round(Math.random() * 1000);
        const cardNameField = await $('//textarea[@data-testid="list-card-composer-textarea"]');
        await cardNameField.setValue(cardName);

        const addCardButton = await $('//button[@data-testid="list-card-composer-add-card-button"]');
        await addCardButton.waitForClickable();
        await addCardButton.click();

        const createdCardName = await $(`//li[@data-list-id="66a8f615fa9135d777c6dd5e"]//a[contains(text(), '${cardName}')]`);
        await should.exist(createdCardName);
        
    });
});