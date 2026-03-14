import {test} from '@playwright/test'
import excel from 'exceljs'
import path from "path"

test("Write excel data", async ({page}) => {
    let book = new excel.Workbook()
    await book.xlsx.readFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))
    // let sheet = await book.getWorksheet("Sheet4")
    // if(!sheet){
    //     sheet = await book.addWorksheet("Sheet4")
    // }
    // sheet.getRow(1).getCell(1).value="PlayWright";

    // const data = ["Java", "Selenium", "Cypress", "WebDriverIO"]

    // for(let i = 0; i < data.length; i++){

    //     sheet.getRow(i + 2).getCell(1).value = data[i]

    // }
    // await book.xlsx.writeFile(path.join(__dirname, "../../testdata/readexcel.xlsx"))

    let sheet5 = await book.getWorksheet("Sheet5")
    if(!sheet5){
        sheet5 = await book.addWorksheet("Sheet5")
    }
    await page.goto("https://www.amazon.com/")
    await page.waitForSelector("#nav-xshop a")

    const nav = await page.locator("div.nav-div a").allTextContents()

    for(let i = 0; i < nav.length; i++){
        sheet5.getRow(i + 1).getCell(1).value = nav[i].trim()
        console.log(nav[i]);
        
    }

    await book.xlsx.writeFile(path.join(__dirname,"../../testdata/readexcel.xlsx"))

})