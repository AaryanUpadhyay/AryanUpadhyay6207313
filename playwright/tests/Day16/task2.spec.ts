import { test, expect } from '@playwright/test';
import path from "path"

test("multiple tabs", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    // await page.goto('https://www.myntra.com/shoes?rawQuery=shoes')

    // let page2 = await context.newPage();
    // await page2.goto('https://www.amazon.com/');

    // let page3 = await context.newPage();
    // await page3.goto('https://www.flipkart.com/');


    // await page.goto('https://flipkart.com/');
    // await page.waitForTimeout(3000);
    // const closeBtn = page.getByRole('button', { name: '✕' });
    // if (await closeBtn.isVisible()) {
    //     await closeBtn.click();
    // }
    // const searchBox = page.locator('//input[@name="q"]').first();
    // await expect(searchBox).toBeEditable();
    // await searchBox.fill('shoes');
    // await searchBox.press('Enter');
    // let [page2] =await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.locator('//img[@class="MZeksS"]').first().click()
    // ]);
    // await page2.waitForLoadState();
    // console.log(await page2.url());
    // console.log(await page.url());
    // console.log(page);
    // console.log(page2);

    await page.goto('https://demoapps.qspiders.com/ui/browser/newTab?sublist=1')
    // let [page2] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.getByText('view more').first().click()
    // ]);
    const popupPromise = page.waitForEvent('popup');
await page.getByText('view more').first().click();
const p
age2 = await popupPromise;

    await page2.waitForLoadState();
    console.log(await page2.url());
    console.log(await page.url());
    console.log(page);
    console.log(page2);


    // await page.goto('https://demoapps.qspiders.com/ui/browser?sublist=0')
    // let [page2] = await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.getByText('view more').first().click()
    // ]);
    // await page2.waitForLoadState();
    // console.log(await page2.url());
    // console.log(await page.url());
    // console.log(page);
    // console.log(page2);

    // await page.goto('https://demoapps.qspiders.com/ui/download?sublist=0')
    // await page.getByPlaceholder('Enter text here').fill("Hello this is a sample text file");
    // await page.getByPlaceholder('Filename').fill("sample.txt");
    // let [downloadfile] = await Promise.all([
    //     page.waitForEvent('download'),
    //     page.locator('#downloadButton').click()
    // ])

    // let downloadfolder = "C:/Users/Aryan Upadhyay/OneDrive/Desktop/projects/playwright/download"
    // let filename = await downloadfile.suggestedFilename()
    // await downloadfile.suggestedFilename()
    // console.log(filename)
    // await downloadfile.saveAs(path.join(downloadfolder,filename))
    // await page.waitForTimeout(5000);
})