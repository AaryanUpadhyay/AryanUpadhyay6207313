import {test} from '@playwright/test'
import path from "path"

test("upload file", async ({page}) =>{
    console.log(__dirname)
    console.log(__filename);
    await page.goto('https://testautomationpractice.blogspot.com/')
    //! Case 1
    // await page.locator('#singleFileInput').setInputFiles("C:/Users/Aryan Upadhyay/OneDrive/Desktop/projects/playwright/uploadFile/file.txt")
    // await page.getByRole("button",{name:"Upload Single File"}).click()

    // await page.locator('#multipleFilesInput').setInputFiles(['C:/Users/Aryan Upadhyay/OneDrive/Desktop/projects/playwright/uploadFile/file.txt','C:/Users/Aryan Upadhyay/OneDrive/Desktop/projects/playwright/uploadFile/demo.xlsx'])
    // await page.getByRole('button',{name:"Upload Multiple Files"}).click()

    // Case 2
    await page.locator("#singleFileInput").setInputFiles(path.join(__dirname, "../../uploadFile/file.txt"))
    await page.getByRole("button",{name:"Upload Single File"}).click()
    await page.waitForTimeout(2000)
    
})
