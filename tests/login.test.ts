import { chromium, test } from "@playwright/test"
test("login test demo",async ()=>{
    const browser = await chromium.launch
    const context = await browser();
    const page = await context.newPage();

    await page.goto ("https://www3.animeflv.net/")
    await page.locator('text=Login').click(); 
})