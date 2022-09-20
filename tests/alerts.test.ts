import { expect, test } from "@playwright/test"

test("handling alerts", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

  // Click text=Click Me >> nth=2
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('text=Click Me').nth(2).click();
})


test('bootstrapAlert', async ({ page }) => {
    // Go to https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo');
    // Click text=Launch Modal >> nth=0
    await page.locator('text=Launch Modal').first().click();
    // Click div[role="dialog"] >> text=Save Changes
    await page.locator('div[role="dialog"] >> text=Save Changes').click();
  });
