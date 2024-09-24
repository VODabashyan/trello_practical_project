import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../po/home.page'
import LoginPage from '../po/loginRegister.page';
import BoardPage from '../po/board.page';
import List from '../po/components/list.component'

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
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