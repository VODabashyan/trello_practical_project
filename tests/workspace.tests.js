import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../po/home.page';
import LoginPage from '../po/loginRegister.page';
import BoardPage from '../po/board.page';
import WorkspacePage from '../po/workspace.page';

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await WorkspacePage.open('');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it("edit the workspace details", async () => {
        await HomePage.openLoginPage();
        await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');
        await BoardPage.selectWorkspaceSettings();
        await WorkspacePage.editWorkspaceDetails();

        await should.exist(WorkspacePage.workspaceName);
        await should.exist(WorkspacePage.workspaceDescription);
    });
});