import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('SauceDemo @smoke', async ({ page }) => {

const Login = new LoginPage(page); 
await Login.goToLoginPage();
// await Login.login('standard_user', 'secret_sauce');
await Login.login();

    
//  await page.goto('https://www.saucedemo.com/');
//  await expect(page).toHaveTitle(/Swag/);

//  await page.locator('[data-test="username"]').click();
//  await page.locator('[data-test="username"]').fill('standard_user');
//  await page.locator('[data-test="password"]').click();
//  await page.locator('[data-test="password"]').fill('incorrect_password');
//  await page.locator('[data-test="login-button"]').click();
 
// await expect(page.locator('[data-test="error"]')).toBeVisible();
// await expect(page.locator('[data-test="error"]')).toHaveText('Epic sadface: Username and password do not match any user in this service');



//  await page.locator('[data-test="password"]').fill('secret_sauce');
//  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="title"]')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();


//  await page.getByRole('button', { name: 'Open Menu' }).click();
//  await page.locator('[data-test="logout-sidebar-link"]').click();
await Login.logout();

  
});

test('Checkout @e2e', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Luis');
  await page.locator('[data-test="firstName"]').press('Tab');
  await page.locator('[data-test="lastName"]').fill('Mejia');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('02100');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="back-to-products"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();
});
