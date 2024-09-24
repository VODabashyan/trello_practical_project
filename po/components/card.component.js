import { clickElement, setValueElement, browserPause } from '../../core/core_operations';

class Card {
    constructor() {
        this.addNewCardButtoon = '//li[@data-list-id="66a8f615fa9135d777c6dd5e"]//button[@data-testid="list-add-card-button"]';
        this.cardNameField = '//textarea[@data-testid="list-card-composer-textarea"]';
        this.addCardButton = '//button[@data-testid="list-card-composer-add-card-button"]';
        this.cardNameSelector = '';
    }

    async addCard() {
        await clickElement(this.addNewCardButtoon);
        let cardName = "card" + Math.round(Math.random() * 1000);
        await setValueElement(this.cardNameField, cardName);
        await clickElement(this.addCardButton);
        this.cardNameSelector = await $(`//li[@data-list-id="66a8f615fa9135d777c6dd5e"]//a[contains(text(), '${cardName}')]`);
    }

    get cardName() {
        return this.cardNameSelector;
    }
}

export default new Card();