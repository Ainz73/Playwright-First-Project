import { Page } from "@playwright/test";

export default class SpecialHotPage {

    constructor (public page: Page){

    }

    async addFirstProductToTheCart() {
        await this.page.hover("//div[@class='image']/a", {
            strict: false
        });
        await this.page.locator("(//button[@title='Add to Cart']//i)[1]")
        .nth(0).click();
    }
    async isToastVisible() { 
        const toast = this.page.locator("//a[contains(.,'View Cart')]")
        await toast.waitFor({state: "visible"})
        return toast
    }
}