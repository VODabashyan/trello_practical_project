import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expectChai = chai.expect;

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    it("Logging in with an invalid email", async () => {
        const logInButton = await $('//div[contains(@class, "jnMZCI")]/a[text()="Log in"]');
        await logInButton.waitForClickable();
        await logInButton.click();

        const signUpButton = await $('//a[text()="Create an account"]');
        await signUpButton.waitForClickable();
        await signUpButton.click();

        await browser.pause(1000);

        const emailInputField = await $('//input[@id="email"]');
        await emailInputField.click();
        await emailInputField.setValue('testnodejs55555@gmail');

        const signUpSubmitButton = await $('//button[@id="signup-submit"]');
        await signUpSubmitButton.waitForClickable();
        await signUpSubmitButton.click();

        const errorMessage = await $('//div[@id="email-uid6-error"]');
        assert.equal(await errorMessage.getText(), "Please enter a valid email address");

    });

    it("Logging in with a valid email", async () => {
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

        await browser.pause(2000);

        const passwordInputField = await $('//input[@id="password"]');
        await passwordInputField.click();
        await passwordInputField.setValue(',FEVrV9c=Pm%Q=N');

        await loginSubmitButton.click();

        await browser.pause(1000);

        expectChai (await browser.getTitle()).to.equal("Boards | Trello");
    });

    it("should get confirmation when changing the bio", async () => {
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

        await browser.pause(1000);

        const userMenuButton = await $('//div[@data-testid="header-member-menu-avatar"]');
        await userMenuButton.waitForClickable();
        await userMenuButton.click();

        const profileAndVisibiltyOption = await $('//span[text()="Profile and visibility"]');
        await profileAndVisibiltyOption.waitForClickable();
        await profileAndVisibiltyOption.click();

        const bioTextArea = await $('//textarea[@id="bio"]');
        await bioTextArea.waitForClickable();
        await bioTextArea.click();
        await bioTextArea.setValue("This is a bio");

        const saveBioButton = await $('//button[text()="Save"]');
        await saveBioButton.waitForClickable();
        await saveBioButton.click();

        const bioSavedPopup = await $('//textarea[@id="bio"]');
        expect (await bioSavedPopup).toBeDisplayed();
    });

    it("create a new board", async () => {
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

        const createButton = await $('//button[@data-testid="header-create-menu-button"]');
        await createButton.waitForClickable();
        await createButton.click();

        const createBoardOption = await $('//button[@data-testid="header-create-board-button"]');
        await createBoardOption.waitForClickable();
        await createBoardOption.click();

        let name = "test" + Math.round(Math.random() * 1000);
        const boardTitleInputField = await $('//input[@data-testid="create-board-title-input"]');
        await boardTitleInputField.setValue(name);

        const createBoardButton = await $('//button[text()="Create"]');
        await createBoardButton.waitForClickable();
        await createBoardButton.click();

        const pageName = await $(`//h1[contains(text(), '${test}')]`);
        await should.exist(pageName);
    });

    it("search for an existing board", async () => {
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

        const searchField = await $('//input[@placeholder="Search"]');
        await searchField.waitForClickable();
        await searchField.click();
        await searchField.setValue("My Board");

        const viewAllResults = await $("//span[normalize-space()='View all results']");
        await viewAllResults.waitForClickable();
        await viewAllResults.click();

        const myBoardOption = await $("//span[text()='My Board']");
        await myBoardOption.waitForClickable();
        await myBoardOption.click();

        await browser.pause(3000);

        const pageName = await $('//h1[text()="My Board"]');
        await should.exist(pageName);
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

        const searchField = await $('//input[@placeholder="Search"]');
        await searchField.waitForClickable();
        await searchField.click();
        await searchField.setValue("My Board");

        const viewAllResults = await $("//span[normalize-space()='View all results']");
        await viewAllResults.waitForClickable();
        await viewAllResults.click();

        const myBoardOption = await $("//span[text()='My Board']");
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

        const searchField = await $('//input[@placeholder="Search"]');
        await searchField.waitForClickable();
        await searchField.click();
        await searchField.setValue("My Board");

        const viewAllResults = await $("//span[normalize-space()='View all results']");
        await viewAllResults.waitForClickable();
        await viewAllResults.click();

        const myBoardOption = await $("//span[text()='My Board']");
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

    it("edit the workspace details", async () => {
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

        const workspaceSettingsOption = await $('//li[@data-testid="home-team-tab-section-66a8e3490455232f9e038e6d"]//span[text()="Settings"]');
        await workspaceSettingsOption.waitForClickable();
        await workspaceSettingsOption.click();

        const workspaceEditButton = await $('//span[@data-testid="EditIcon"]');
        await workspaceEditButton.waitForClickable();
        await workspaceEditButton.click();

        let workspaceName = "workspace" + Math.round(Math.random() * 1000);
        const workspaceNameField = await $('//input[@data-testid="workspace-display-name"]');
        await workspaceNameField.waitForClickable();
        await workspaceNameField.click();
        await workspaceNameField.setValue(workspaceName);

        const workspaceDescriptionArea = await $('//textarea[@id="desc"]');
        await workspaceDescriptionArea.waitForClickable();
        await workspaceDescriptionArea.click();
        await workspaceDescriptionArea.setValue("This is a description for " + workspaceName);

        const saveButton = await $('//button[text()="Save"]');
        await saveButton.waitForClickable();
        await saveButton.click();

        const changedName = await $(`//h2[contains(text(), "${workspaceName}")]`);
        await should.exist(changedName);

        const changedDescription = await $(`//p[contains(text(), "This is a description for ${workspaceName}")]`)
        await should.exist(changedDescription);

    });

});