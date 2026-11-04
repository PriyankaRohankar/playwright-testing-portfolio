const { test, expect } = require('@playwright/test');

test('search page validation', async ({ page }) => {

    await page.goto('https://www.google.com');

    await expect(page).toHaveURL(/google/);

});
