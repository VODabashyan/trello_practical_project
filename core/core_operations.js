import { browser } from '@wdio/globals';

const clickElement = async (xpath) => {
    const element = await $(xpath);
    await element.waitForDisplayed({ timeout: 5000, interval: 1000 });
    await element.click();
};

const setValueElement = async (xpath, value) => {
    const element = await $(xpath);
    await element.waitForDisplayed({ timeout: 5000, interval: 1000 });
    await element.setValue(value);
};

const browserPause = async (value) => {
    await browser.pause(value);
};

export {clickElement, setValueElement, browserPause};