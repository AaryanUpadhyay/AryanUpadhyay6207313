import {test} from "@playwright/test"

test("custom wait" , async({page})=>{
await page.goto("https://www.amazon.in/");
await page.waitForFunction(()=>{
    return document.readyState==='complete'
    let ele = document.querySelectorAll(('//a[@class="nav-a  "]')[1])
    return ele.length>1
})


})