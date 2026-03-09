import {test} from "@playwright/test"
import {expect} from "@playwright/test"

test("WebElements", async ({page})=>{
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await page.getByLabel("Username",{exact:true}).type("student")
    // await page.getByLabel("Username",{exact:true}).type("student1")
    // await page.getByLabel("Password",{exact:true}).fill("Password123")
    // await page.getByLabel("Password",{exact:true}).fill("Password1234")
    // await page.getByText("Submit").first().click()
    // await page.waitForTimeout(3000)
    // const usernameValue = await page.innerHTML('//input[@id="username"]')
    // const passwordValue = await page.innerHTML('//input[@id="password"]')
    // const usernameValue = await page.textContent('//input[@id="username"]')
    // const passwordValue = await page.textContent('//input[@id="password"]')
    // const usernameValue = await page.inputValue('//input[@id="username"]')
    // const passwordValue = await page.inputValue('//input[@id="password"]')
    // const vis = await page.getByLabel("Username",{exact:true}).isVisible()
    // const visi = await page.getByLabel("Password",{exact:true}).isVisible()
    // await page.locator('//button[@id="submit"]').click()
    // console.log(vis)
    // console.log(visi)

    await page.goto("https://www.amazon.in/");
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes')
    await page.keyboard.press("Enter")
    await page.locator("//h2[@class='a-size-base-plus a-spacing-none a-color-base a-text-normal']/child::span").first().waitFor()
    // let ele =  await page.locator("h2[@.class='a-size-base-plus a-spacing-none a-color-base a-text-normal']/span").all()
    // console.log(ele)
    // console.log(usernameValue)
    // console.log(passwordValue)
})