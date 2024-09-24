import * as chai from 'chai';
let should = chai.should();
import { browser } from '@wdio/globals';
import HomePage from '../po/home.page'
import LoginPage from '../po/loginRegister.page';
import BoardPage from '../po/board.page';
import Card from '../po/components/card.component'

describe("Trello Suite", async () => {
    beforeEach(async () => {
        await browser.url("https://trello.com/home");
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