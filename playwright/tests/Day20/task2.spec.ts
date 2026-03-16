import { test } from "@playwright/test"
import ShopperPage from '../../PageObjectModel/shopper.page'
import fs from "fs"
import path from "path"
let dataitem = fs.readFileSync(path.join(__dirname, "../../testdata/shopper.json"))
let data = JSON.parse(dataitem)


test("ShoppersStack Flow", async ({ page }) => {

    await Promise.all([
        page.waitForEvent('load'),
        page.goto("https://www.shoppersstack.com/")
    ])
    const shopper = new ShopperPage(page)
    await shopper.login(data.username, data.password)
    await shopper.searchItem(data.item1, page)
    await shopper.addFirstItem()

    await shopper.openCart()
    await shopper.removeItems()
    await shopper.searchItem(data.item2, page)
    await shopper.addFirstItem()

    await shopper.openCart()
    await shopper.increaseQuantityLoop()
    await shopper.removeItems()

    await shopper.logout()

})