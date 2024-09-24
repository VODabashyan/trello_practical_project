import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../po/home.page';
import LoginPage from '../po/loginRegister.page';
import BoardPage from '../po/board.page';
import ProfilePage from '../po/profile.page';

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
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