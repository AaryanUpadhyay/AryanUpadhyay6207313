import { test } from '@playwright/test'
import AmazonPage from '../../PageObjectModel/mobiles.page'
import fs from "fs"
import path from "path"
let dataitem = fs.readFileSync(path.join(__dirname, "../../testdata/mobile.json"))
let data = JSON.parse(dataitem)

test("amazon mobile purchase", async ({ page, context }) => {
    const amazon = new AmazonPage(page)

    await amazon.navigate(data.url)

    await amazon.searchProduct(data.searchProduct)

    await amazon.selectRamFilter()

    const productPage = await amazon.openFourthMobile(context)

    await productPage.selectOption("select#quantity", data.quantity)
    await productPage.locator("#add-to-cart-button").nth(1).click()

    await productPage.click("#nav-cart")
})