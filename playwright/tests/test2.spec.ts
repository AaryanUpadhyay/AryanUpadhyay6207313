import { test } from "@playwright/test";
import { log } from "node:console";

test("title", async({browser, browserName}) => {
    // console.log("hi");

    let context = await browser.newContext();
    // let page = await context.newPage();
    let page2 = await context.newPage();

    let page = await context.newPage();
    await page.goto("https://www.amazon.com/");
    await page.locator('input#twotabsearchtextbox').fill("iphone");
    console.log(browserName)

    await page.pause();
    await page.goto("https://www.amazon.com/");
    await page.locator('input#twotabsearchtextbox').fill("iphone");
    console.log(browserName)
    console.log(await page.viewportSize());

    await page2.goto("https://www.flipkart.com/");
})

//Fixtures:- It is a setup block of code which is reusable and can be used across multiple test cases. It is used to set up the test environment before running the test cases and to clean up the environment after the test cases are executed.
// Page, Browser, broweserName, context, request