import BasePage from "./base.page";
import { clickElement, setValueElement, browserPause } from '../core/core_operations.js';

class BoardPage extends BasePage {
    constructor() {
        super();
        this.createButton = '//button[@data-testid="header-create-menu-button"]';
        this.createBoardOption = '//button[@data-testid="header-create-board-button"]';
        this.boardTitleInputField = '//input[@data-testid="create-board-title-input"]';
        this.createBoardButton = '//button[text()="Create"]';
        this.boardNameSelector = '';
        this.myBoardOption = '//div[@title="My Board"]/parent::div';
    }

    async createBoard() {
        await clickElement(this.createButton);
        await browserPause(1000);
        await clickElement(this.createBoardOption);
        await browserPause(1000);
        let name = "test" + Math.round(Math.random() * 1000);
        await setValueElement(this.boardTitleInputField, name);
        await browserPause(1000);
        await clickElement(this.createBoardButton);
        await browserPause(1000);
        this.boardNameSelector = await $(`//h1[contains(text(), '${name}')]`);
        await browserPause(1000);
    }

    get boardName() {
        return this.boardNameSelector;
    }

    async selectMyBoard() {
        await clickElement(this.myBoardOption);
        await browserPause(1000);
    }
}

export default new BoardPage();