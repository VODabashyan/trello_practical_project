import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../po/loginRegister.page';
import HomePage from '../po/home.page'

Given(/^T1 user is on the signup page$/, async () => {
	await HomePage.openLoginPage();
});

When(/^T1 user enters an invalid (.*)$/, async (email) => {
	await LoginPage.signUp(email);
});

Then('T1 the user should see a {string} error', async (message) => {
  const errorMessage = await $('//div[@id="email-uid6-error"]').getText();
  expect(errorMessage).toEqual(message);
});

