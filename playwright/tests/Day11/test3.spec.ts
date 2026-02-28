import {test} from "@playwright/test";

test("task", async ({page}) => {
    await page.goto("https://www.amazon.in/");
    await page.locator('input#twotabsearchtextbox').fill("samsung phone");
    await page.locator('input#twotabsearchtextbox').press("Enter");
    await page.waitForURL("https://www.amazon.in/s?k=samsung+phone&ref=nb_sb_noss");
    const price = await page.locator('span.a-price-whole').first().textContent();
    console.log('First item price:', price);
    
})