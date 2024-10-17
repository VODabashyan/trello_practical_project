import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../business/po/home.page'
import LoginPage from '../business/po/loginRegister.page';
import BoardPage from '../business/po/board.page';
import Card from '../business/po/components/card.component'

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await BoardPage.open('');
    });

    afterEach(async () => {
        await browser.deleteCookies();
    });

    it("create a new card in a list", async () => {
        await HomePage.openLoginPage();
        await LoginPage.login('testnodejs55555@gmail.com', ',FEVrV9c=Pm%Q=N');
        await BoardPage.selectMyBoard();
        await Card.addCard();

        const createdCardName = await Card.cardName;
        await should.exist(createdCardName);
        
    });
});