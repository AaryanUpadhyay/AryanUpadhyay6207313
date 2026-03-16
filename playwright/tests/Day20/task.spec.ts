import {test} from '@playwright/test'
import login from '../../PageObjectModel/login.page'

test("login using pom function", async ({page})=>{
    let log = new login(page)
    await page.goto('https://practicetestautomation.com/practice-test-login/')
    log.login("student", "Password123")
    await page.waitForTimeout(2000)
})