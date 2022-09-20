import { Page } from "@playwright/test";
export default class LoginPage {

    constructor(public page: Page) {

    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginButton();
    }

    async enterEmail(emailadress: string) {
        await this.page.locator("input[name='email']")
            .type(emailadress)
    }

    async enterLoginPassword(logpassword: string) {
        await this.page.locator("input[type='password']")
            .type(logpassword)
    }

    async clickLoginButton() { 
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click("input[type='submit']")
        ])
    }

}

