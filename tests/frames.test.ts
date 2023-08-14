import { expect, test } from "@playwright/test"

test ("interact with frames", async ({ page}) => {

    await page.goto('https://letcode.in/frame');
    const allframes = page.frames();
    console.log( "No.of frames: " + allframes.length);

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill ("Julio")
    await frame.locator("input[name='lname']").fill ("Italo")

    const innerframe = frame.frameLocator("iframe[src='innerFrame']")
    await innerframe.locator("input[name='email']").fill("ainz_72@outlook.com")

    await frame.locator("input[name='fname']").fill ("Elma")
    

    // const myFrame = page.frame("firstFr")
    // await myFrame?.fill("input[name='fname']", "Fabio")
    // await myFrame?.fill("input[name='lname']", "Aiez")
    
    // expect (await myFrame?.locator("p.has-text-info").textContent()).toContain("You have entered");


    await page.waitForTimeout(3000);




})