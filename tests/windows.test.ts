import { test } from "@playwright/test"

test ("interact with multiple tabs", async ({page}) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
    
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("'Follow On Twitter'")
        
    ])

    console.log(newWindow.url())

}) 


