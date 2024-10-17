import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../business/po/home.page'
import LoginPage from '../business/po/loginRegister.page';
import BoardPage from '../business/po/board.page';
import List from '../business/po/components/list.component'

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await BoardPage.open('');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it("create a new list in a board", async () => {
        await HomePage.openLoginPage();
        await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');
        await BoardPage.selectMyBoard();
        await List.createList();
        const listName = await List.listName;
        await should.exist(listName);
    });
});