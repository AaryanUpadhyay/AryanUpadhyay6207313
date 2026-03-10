import {test} from '@playwright/test';

test("mouse hover and click", async ({page}) => {
    // await page.goto("https://demoapps.qspiders.com/ui/button/buttonDouble?sublist=2");
    // await page.locator("//button[text()='Yes']").dblclick();
    // await page.locator("//button[text()='Yes']").click({button: "right" ,clickCount: 2 });
    // await page.waitForTimeout(5000);
    // await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0");
    // await page.locator("//img[@class='w-5 h-5 mt-5 ml-3 cursor-pointer ']").hover();
    // await page.locator("#btn_a").hover();
    // await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    // await page.locator("div#circle").first().click({delay: 5000});
    // await page.goto('https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4')
    // await page.locator('#submitButton').click({force: true});
    // await page.locator('#submitButton').dispatchEvent('click');
    // await page.goto('https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2')
    // await page.locator('.draggable').first().dragTo(page.locator('.drop-column').first());
//     const sources = page.locator('.draggable');
//   const destinations = page.locator('.drop-column');

//   for (let i = 0; i < 4; i++) {

//     const sourceBox = await sources.nth(i).boundingBox();
//     const targetBox = await destinations.nth(Math.floor(i / 2)).boundingBox();

//     if (sourceBox && targetBox) {

//       await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
//       await page.mouse.down();

//       await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
//       await page.mouse.up();
//     }
//   }

    // await page.goto('https://demoapps.qspiders.com/ui/scroll/newTabVertical')
    // await page.locator('//input[@type="checkbox"]').scrollIntoViewIfNeeded();
    // await page.waitForTimeout(5000);
    // await page.locator('//input[@type="checkbox"]').click();
    // await page.getByText("Accept Our Policy").click();

    // await page.goto('https://demoapps.qspiders.com/ui/keyboard?sublist=0')
    // await page.locator('//input[@class="p-2 w-[350px] mt-2 mb-2 rounded shadow"]').click();
    // await page.keyboard.insertText('Aryan');
    // await page.keyboard.down('Shift');
    // await page.keyboard.press('Ctrl+A');
    // await page.keyboard.up('Shift');
    // await page.keyboard.type('hello');
    await page.goto('https://demoapps.qspiders.com/ui?scenario=1')
    await page.locator('input[id="name"]').click();
    await page.keyboard.insertText('Aryan');
    await page.keyboard.press('Tab');
    await page.keyboard.insertText('Aryan@gmail.com');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.keyboard.press('Tab');
    await page.keyboard.press('Control+V');
    await page.waitForTimeout(5000);
    await page.keyboard.down('Enter');
    await page.keyboard.up('Enter');
    await page.waitForTimeout(5000);
})