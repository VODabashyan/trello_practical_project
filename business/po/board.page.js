import BasePage from "./base.page";
import { clickElement, setValueElement, browserPause } from '../../core/core_operations';

class BoardPage extends BasePage {
    constructor() {
        super();
        this.createButton = '//button[@data-testid="header-create-menu-button"]';
        this.createBoardOption = '//button[@data-testid="header-create-board-button"]';
        this.boardTitleInputField = '//input[@data-testid="create-board-title-input"]';
        this.createBoardButton = '//button[text()="Create"]';
        this.boardNameSelector = '';
        this.myBoardOption = '//div[@title="My Board"]/parent::div';
        this.userMenuButton = '//div[@data-testid="header-member-menu-avatar"]';
        this.profileAndVisibiltyOption = '//span[text()="Profile and visibility"]';
        this.workspaceSettingsOption = '//li[@data-testid="home-team-tab-section-66a8e3490455232f9e038e6d"]//span[text()="Settings"]';
    }

    async createBoard() {
        await clickElement(this.createButton);
        await clickElement(this.createBoardOption);
        let name = "test" + Math.round(Math.random() * 1000);
        await setValueElement(this.boardTitleInputField, name);
        await clickElement(this.createBoardButton);
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

    async selectUserProfile() {
        await clickElement(this.userMenuButton);
        await clickElement(this.profileAndVisibiltyOption);
    }

    async selectWorkspaceSettings() {
        await clickElement(this.workspaceSettingsOption);
    }
}

export default new BoardPage();