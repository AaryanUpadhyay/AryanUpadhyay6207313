import {test} from "@playwright/test"

test("Custom awaits", async ({page})=>{
    await page.goto('https://www.amazon.in/')
    await page.waitForFunction(() =>{
        // return document.readyState==='complete'
        let ele = document.querySelectorAll('.nav-a ')
        return ele.length > 1
    })
    await page.title()
})