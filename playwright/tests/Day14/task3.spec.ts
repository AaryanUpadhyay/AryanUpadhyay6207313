import { test, expect } from '@playwright/test';

test.use({
  actionTimeout: 8000
});

test('example test', async ({ page }) => {
  test.setTimeout(6000);

  await page.goto('https://example.com');
  await page.click('text=More information', { timeout: 2000 });

});