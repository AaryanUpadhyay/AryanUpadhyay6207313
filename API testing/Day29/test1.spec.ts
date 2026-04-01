import { test, request } from '@playwright/test'

test('API testing with Playwright', async ({ request }) => {
    let r1 = await request.post("https://petstore3.swagger.io/api/v3/pet", {
        data: {
            id: 92,
            name: "Buddy",
            status: "available"
        }
    })
    console.log(r1)
    console.log(await r1.json());
    console.log((await r1.json()).name);

    let r2 = await request.get("https://petstore3.swagger.io/api/v3/pet/92")
    console.log(await r2.json())

    let r3 = await request.put("https://petstore3.swagger.io/api/v3/pet", {
        data: {
            id: 92,
            name: "Doggesh",
            status: "pending"
        }
    })
    console.log(await r3.json())
    let r4 = await request.get("https://petstore3.swagger.io/api/v3/pet/92")
    console.log(await r4.json())
})