import { test, expect } from '@playwright/test';

test('test @assertions', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('https://kitchen.applitools.com/');
  await page.getByRole('heading', { name: 'The Kitchen' }).click();
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    
  //Check element exists before clicking
    if (await page.$('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeVisible();
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeHidden();
   
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toBeEnabled();
    //await expect.soft(page.getByRole('heading', { name: 'The Kitchen' })).toBeDisabled();

    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveAttribute('class', 'chakra-heading css-dpmy2a');
    //await expect(page).toHaveScreenshot();
 

});