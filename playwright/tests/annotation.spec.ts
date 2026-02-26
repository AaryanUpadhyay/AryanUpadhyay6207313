import test from "@playwright/test";
// Annotations
// They are adding some extra label
// skip, only, fixme, fail, describe, slow, settimeout

test("test", async () => {
    console.log("hi");
})

test.skip("test1", async () => {
    console.log("hello");
})
test("test2", async () => {
    console.log("hola");
})
test("test3", async () => {
    test.slow();
    console.log("bonjour");
    
})
test("test4", async () => {
    console.log("jambo");
})
test.describe("test5", async () => {
    console.log("namaste")
    test("test5a",async ({page}) => {

    })
    test("test5b", ()=>{})
    test("test5c", ()=>{})
})