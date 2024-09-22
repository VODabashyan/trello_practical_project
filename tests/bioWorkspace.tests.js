import * as chai from 'chai';
let assert = chai.assert;
let should = chai.should();
let expectChai = chai.expect;

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    afterEach(async () => {
        await browser.deleteCookies();
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