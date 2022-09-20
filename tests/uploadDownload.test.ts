import { test } from "@playwright/test";

test("Dowload files", async ({page}) => {
const textContect = "Aeiz UwU"
    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo');
    await page.type("#textbox", textContect)
    await page.click("#create");
    const download = await Promise.all([
        page.waitForEvent("download"),
        await page.click("#link-to-download")
    ]);

    await download [0];

    await page.waitForTimeout(5000);
})



test("" , async ({ page }) => {
    await page.goto('https://blueimp.github.io/jQuery-File-Upload/');
    await page.locator('input[name="files\\[\\]"]').click();
    await page.locator('input[name="files\\[\\]"]').setInputFiles('uploadItems/red planet.png');

    // const uploadFiles = await Promise.all([
    //     page.waitForEvent("filechooser"),
    //     page.click('input[name="files\\[\\]"]')
    // ])
    // const isMultiple =  uploadFiles.isMultiple();
    // console.log(isMultiple);
    // uploadFiles.setFiles(['uploadItems/red planet.png'])

    await page.waitForTimeout(3000);
})