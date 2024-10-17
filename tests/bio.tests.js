import { browser } from '@wdio/globals';
import HomePage from '../business/po/home.page';
import LoginPage from '../business/po/loginRegister.page';
import BoardPage from '../business/po/board.page';
import ProfilePage from '../business/po/profile.page';

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await ProfilePage.open('');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it("should get confirmation when changing the bio", async () => {
        await HomePage.openLoginPage();
        await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');
        await BoardPage.selectUserProfile();
        await ProfilePage.chnageBio();
        expect (await ProfilePage.savedPopup).toBeDisplayed();
    });
});