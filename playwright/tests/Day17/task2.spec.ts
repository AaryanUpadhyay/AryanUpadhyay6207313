import { test } from "@playwright/test";

test("Notification", async ({ browser }) => {

    const context = await browser.newContext({
        permissions: ["notifications"]
    });

    const page = await context.newPage();

    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
    await page.getByRole("button",{name:"Notification"}).click()
    const result = await page.evaluate(async () => {
        return await Notification.requestPermission();
    });

    console.log("Permission status:", result);

    

    await page.waitForTimeout(3000);
});