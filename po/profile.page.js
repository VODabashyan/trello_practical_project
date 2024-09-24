import BasePage from "./base.page";
import { clickElement, setValueElement, browserPause } from '../core/core_operations.js';

class ProfilePage extends BasePage {
    constructor() {
        super();
        this.bioTextArea = '//textarea[@id="bio"]';
        this.saveBioButton = '//button[text()="Save"]';
        this.bioSavedPopup = '//textarea[@id="bio"]';
    }

    async chnageBio() {
        await setValueElement(this.bioTextArea, "This is a bio");
        await clickElement(this.saveBioButton);
    }

    get savedPopup() {
        return this.bioSavedPopup;
    }
}

export default new ProfilePage();