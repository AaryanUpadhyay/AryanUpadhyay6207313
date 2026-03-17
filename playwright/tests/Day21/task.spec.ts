import {test} from '@playwright/test'

test("Prokabbadi Fixture using single x path", async ({page}) => {
    await page.goto('https://www.prokabaddi.com/schedule-fixtures-results?tab=recent')
    console.log(await page.locator('(//div/p[@class="match-count"])[1] | (//div/p[@class="team-name"])[1] | (//div/p[@class="score"])[1] | (//div/p[@class="score"])[2] | (//div/p[@class="team-name"])[2] | (//div/p[@class="match-place"])[1]').allTextContents())
    
})