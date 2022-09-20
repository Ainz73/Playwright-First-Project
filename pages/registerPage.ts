import { Page } from "@playwright/test"
export default class RegisterPage {

    constructor(public page: Page) {

    }

   async enterFirstName(firstname: string) {
        await this.page.locator("#input-firstname")
            .type(firstname)
    }
    async enterLastName(Lastname: string) {
        await this.page.locator("#input-lastname")
            .type(Lastname)
    }
    async enterEmail(email: string) {
        await this.page.locator("input[type='email']")
            .type(email)
    }
    async enterTelephone(phone: string) {
        await this.page.locator("input[name='telephone']")
            .type(phone)
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password")
            .type(password)
    }

    async enterConfirmPassword(confirmpass: string) {
        await this.page.locator("#input-confirm")
            .type(confirmpass)
    }

    async isSubscribe() {
        return await this.page.locator("label[for='input-newsletter-no']").isChecked();

    }
    async clickTermandCondition() {
        await this.page.click("label[for='input-agree']");
    }

    async clickContinueToRegister() {
        await Promise.all([
            this.page.waitForNavigation({waitUntil: "networkidle"}),
            this.page.click("input[type='submit']")
        ])
        
    }

}