const { test, expect } = require('@playwright/test');

test('dashboard navigation', async ({ page }) => {

    await page.goto('https://example.com');

    const title = await page.title();

    console.log(title);

});
