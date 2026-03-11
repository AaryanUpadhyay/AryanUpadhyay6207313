import { test } from '@playwright/test';

test('Object', async ({ page }) => {
    let arr = ["Shoes", "Watch", "Bag"];

    for (let index in arr) {
        console.log(index);
        console.log(arr[index]);
    }
    let arr1 = ["Shoes", "Watch", "Bag"];

    for (let value of arr1) {
        console.log(value);
    }

    const user = {
        name: "Aryan",
        role: "Tester",
        location: "India"
    };

    for (let key in user) {
        console.log(key);
        console.log(user[key]);
    }
})