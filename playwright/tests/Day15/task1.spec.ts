import {test, expect} from '@playwright/test';

test('Explicit wait for element to be visible', async ({page, context}) => {
    await page.goto('https://flipkart.com/');
    await page.waitForTimeout(3000);
      const closeBtn = page.getByRole('button', { name: '✕' });
      if (await closeBtn.isVisible()) {
        await closeBtn.click();
      }
      const searchBox = page.locator('//input[@name="q"]').first();
      await expect(searchBox).toBeEditable();
      await searchBox.fill('shoes');
  await searchBox.press('Enter');
    await page.waitForTimeout(5000);

    // await page.locator('div.bLCLBY.nr15la').first().click()
    // const price = await page.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]').textContent();

    // console.log("Product Price:", price);
    const [productPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator('div.bLCLBY.nr15la').first().click()
    ]);
    console.log(await page.url())
    console.log(await productPage.url())
    await productPage.waitForLoadState();
const price = await productPage.getByText('₹').first().textContent();

    console.log("Product Price:", price);
    await page.waitForTimeout(5000);
})