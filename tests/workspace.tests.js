import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../business/po/home.page';
import LoginPage from '../business/po/loginRegister.page';
import BoardPage from '../business/po/board.page';
import WorkspacePage from '../business/po/workspace.page';

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