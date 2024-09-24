import { browser } from '@wdio/globals';
import HomePage from '../po/home.page';
import LoginPage from '../po/loginRegister.page';
import BoardPage from '../po/board.page';
import ProfilePage from '../po/profile.page';

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
    });

    it("should get confirmation when changing the bio", async () => {
        await HomePage.openLoginPage();
        await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');
        await BoardPage.selectUserProfile();
        await ProfilePage.chnageBio();
        expect (await ProfilePage.savedPopup).toBeDisplayed();
    });
});