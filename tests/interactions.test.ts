import { expect, test } from "@playwright/test"

test ("Interaccion with inputs", async ({ page }) => { 
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const messageInput = page.locator("input#user-message")
    await messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder"))
    await messageInput.type ("Hi everyone")
});

test ("Sum", async ({ page }) => {
    await   page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const sum1input = page.locator("#sum1")
    const sum2input = page.locator("#sum2")

    const getValuesBtn = page.locator ("form#gettotal>button")
    let num1 = 121;
    let num2 = 546;
    await sum1input.type ("" + num1);
    await sum2input.type ("" + num2);
    await getValuesBtn.click();
    const result = page.locator("#addmessage")
    console.log(await result.textContent());
    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult);
});

test ("Checkbox", async ({ page }) => {

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const singleCheckBox =  page.locator("#isAgeSelected")
    expect(singleCheckBox).not.toBeChecked();
    await singleCheckBox.check();
    
});