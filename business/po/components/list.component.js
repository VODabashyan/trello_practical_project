import { clickElement, setValueElement, browserPause } from '../../../core/core_operations';

class List {
    constructor() {
        this.newListButton = '//button[@data-testid="list-composer-button"]';
        this.listNameField = '//textarea[@placeholder="Enter list name…"]';
        this.addListButton = '//button[@data-testid="list-composer-add-list-button"]';
        this.listNameSelector = '';
    }

    async createList() {
        await clickElement(this.newListButton);
        let listName = "list" + Math.round(Math.random() * 1000);
        await setValueElement(this.listNameField, listName);
        await clickElement(this.addListButton);
        this.listNameSelector = await $(`//h2[contains(text(), '${listName}')]`);
    }

    get listName() {
        return this.listNameSelector;
    }
}

export default new List();