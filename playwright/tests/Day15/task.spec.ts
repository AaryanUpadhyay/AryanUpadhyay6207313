import {test} from '@playwright/test';

test("Wait for the element to be visible", async ({page}) => {
    await  page.goto("https://amazon.in");
    // await page.waitForTimeout(5000);
    // await page.getByTestId("nav_avod_desktop_topnav").waitFor({state:'detached', timeout: 5000});
    await page.locator("a[data-csa-c-content-id='nav_avod_desktop_topnav']").waitFor({state:'attached', timeout:0});
    await page.locator("a[data-csa-c-content-id='nav_avod_desktop_topnav']").click();
    await page.waitForTimeout(5000);
    // await page.waitForSelector("a[data-csa-c-content-id='nav_avod_desktop_topnav']", {state: 'visible', timeout: 10000});
    // const primeVideo = page.locator("a[data-csa-c-content-id='nav_avod_desktop_topnav']");

    // await primeVideo.waitFor({ state: 'detached' });

    // await page.locator("a[data-csa-c-content-id='nav_avod_desktop_topnav']").click();
    // await page.waitForTimeout(5000);

    // await page.goto('https://demoapps.qspiders.com/')
    // await page.locator("//div[@class='w-[9rem] h-[2.2rem] flex relative items-center']").first().waitFor({state: 'detached'});
    // await page.locator("//div[@class='w-[9rem] h-[2.2rem] flex relative items-center']").first().click();
    // await page.waitForTimeout(5000);
})