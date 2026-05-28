import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('LoginPageObjectModel', async ({ page }) => {

const Login = new LoginPage(page); 
await Login.goToLoginPage();
// await Login.login('standard_user', 'secret_sauce');
await Login.login();
await Login.logout();
    
 // await page.goto('https://www.saucedemo.com/');
 // await page.locator('[data-test="username"]').click();
 // await page.locator('[data-test="username"]').fill('standard_user');
 // await page.locator('[data-test="password"]').click();
 // await page.locator('[data-test="password"]').fill('secret_sauce');
 // await page.locator('[data-test="login-button"]').click();
 // await page.getByRole('button', { name: 'Open Menu' }).click();
 // await page.locator('[data-test="logout-sidebar-link"]').click();
});