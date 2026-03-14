import { test } from "@playwright/test"
import Example from "../../PageObjectModel/example.page"
import fs from "fs"
import path from "path"
let dataitem = fs.readFileSync(path.join(__dirname, "../../testdata/data.json"))
let data = JSON.parse(dataitem)

test("pom", async ({ page }) => {
    let expage = new Example(page)
    // await page.goto("https://practicetestautomation.com/practice-test-login/")
    // await expage.usernameTF.fill("Aryan")
    // await expage.passwordTF.fill("adafef221")
    // await expage.SubmitBtn.click()
    for (let d of data) {
        let url = d.url
        let user = d.username
        let pass = d.password
        await page.goto(url)
        await expage.usernameTF.fill(user)
        await expage.passwordTF.fill(pass)
        await expage.SubmitBtn.click()

    }
    await page.waitForTimeout(1000)
})