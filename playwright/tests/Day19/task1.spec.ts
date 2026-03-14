import { test } from '@playwright/test'
import fs from "fs"
import path from "path"
let dataitem = fs.readFileSync(path.join(__dirname, "../../testdata/data.json"))
let data = JSON.parse(dataitem)

test("json data", async ({ page }) => {
    // console.log(data.greet);
    // data.forEach(d => {
    //     console.log(d.greet)
    // });
    // await page.goto(data.url)
    // await page.getByLabel("Username").fill(data.username)
    // await page.getByLabel("Password").fill(data.password)
    // await page.keyboard.press("Enter")
    for (let d of data) {
        let url = d.url
        let user = d.username
        let pass = d.password
        await page.goto(url)
        await page.getByLabel("Username").fill(user)
        await page.getByLabel("Password").fill(pass)
        await page.keyboard.press("Enter")
    }
    await page.waitForTimeout(2000)
})