import { expect, test } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/specialHotPage"

const email = "Aeiz_72@outlook.com"
const password = "fabio@7373"

test.use({
    browserName: "firefox"
})

test.describe("POM test demo", async () => {

    // test.use({
    //     baseURL:"sometingss"
    // })

    test("register test_01", async ({ page, baseURL }) => {
        const register = new RegisterPage( page );
        await page.goto(`${baseURL}route=account/register`)
        await register.enterFirstName("Fabio");
        await register.enterPassword(password);
        await register.enterTelephone("79713179");
        await register.enterEmail(email);
        await register.enterConfirmPassword(password);
        await register.enterLastName("Gil");
        expect (register.isSubscribe()).toBeDefined();
        await register.clickTermandCondition();
        await register.clickContinueToRegister();
    
        await page.waitForTimeout(5000);
    
    
    })
    
    
    test ("Login test_02", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        await page.goto (`${baseURL}route=account/login`);
        await login.enterEmail(email);
        await login.enterLoginPassword(password);
        await login.clickLoginButton();
        expect(await page.title()).toBe ("My Account")
    
        await page.waitForTimeout(5000);
    })
    
    test ("Add to cart test_03", async ({ page, baseURL }) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto (`${baseURL}route=account/login`);
        await login.login(email, password);
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCartVisible = await special.isToastVisible();
        expect(isCartVisible).toBeVisible();
    });
})