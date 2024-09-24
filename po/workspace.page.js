import BasePage from "./base.page";
import { clickElement, setValueElement, browserPause } from '../core/core_operations.js';

class WorkspacePage extends BasePage {
    constructor() {
        super();
        this.workspaceEditButton = '//span[@data-testid="EditIcon"]';
        this.workspaceNameField = '//input[@data-testid="workspace-display-name"]';
        this.workspaceDescriptionArea = '//textarea[@id="desc"]';
        this.saveButton = '//button[text()="Save"]';
        this.changedWorkspaceNameSelector = '';
        this.changedWorkspaceDescriptionSelector = '';
    }

    async editWorkspaceDetails() {
        await clickElement(this.workspaceEditButton);
        let workspaceName = "workspace" + Math.round(Math.random() * 1000);
        await setValueElement(this.workspaceNameField, workspaceName);
        await setValueElement(this.workspaceDescriptionArea, "This is a description for " + workspaceName);
        await clickElement(this.saveButton);
        this.changedWorkspaceNameSelector = await $(`//h2[contains(text(), "${workspaceName}")]`);
        this.changedWorkspaceDescriptionSelector = await $(`//p[contains(text(), "This is a description for ${workspaceName}")]`);
    }

    get workspaceName() {
        return this.changedWorkspaceNameSelector;
    }

    get workspaceDescription() {
        return this.changedWorkspaceDescriptionSelector;
    }
}

export default new WorkspacePage();