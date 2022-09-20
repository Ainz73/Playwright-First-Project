import { test, expect } from '@playwright/test';
// import { moment } from 'moment';

test('Calendar demo', async ({ page }) => {

  // Go to https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo
  await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
  let date = "2000-12-04"

  // Fill input[name="birthday"]
  await page.fill('input[name="birthday"]',date);

  await page.waitForTimeout(5000);

});


test ('Calendar demo 2', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo')
    let date = "2000-12-04"

    await page.click("input[placeholder='Start date']");

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]")
    const Next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]")

    let datetoSelect = "March 2022"

    // const thisMonth = moment().format(datetoSelect,"MMMM YYYY").isBefore();
    // console.log("this month?" + thisMonth);
    

    while (await mmYY.textContent() != datetoSelect){
        // if(thisMonth){
            // await prev.click();
        // } else {
        //     await Next.click();
        // }

        

    }

    // await prev.click();
    // await page.locator('td:nth-child(4)').first().click();

    await page.waitForTimeout(3000)
});
