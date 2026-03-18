import {test} from '@playwright/test'

//beforeAll, afterAll, beforeEach, afterEach

// test.beforeEach("", async() => {
//     console.log("Test0")
// })

// test.beforeAll("", async() => {
//     console.log("Test0")
// })
// test.afterEach("", async() => {
//     console.log("Test0")
// })
test.afterAll("", async() => {
    console.log("Test0")
})

test("OOPs1", async () =>{
    console.log("test1")
})
test("OOPs2", async () =>{
    console.log("test2")
})