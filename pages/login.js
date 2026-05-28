exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.usernnameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }
    
   async login(username, password) {
        
        //await this.usernnameInput.fill(username);
        await this.usernnameInput.fill('standard_user');
        //await this.passwordInput.fill(password);
        await this.passwordInput.fill('secret_sauce');
        await this.loginButton.click();
    }
    async goToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async logout() {
        await this.page.getByRole('button', { name: 'Open Menu' }).click();
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }
}