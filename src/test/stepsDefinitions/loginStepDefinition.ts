import { Given, Then, When } from "@cucumber/cucumber";
import { chromium, Page, Browser } from "@playwright/test";

let browser:Browser;
let page:Page;

    Given('un usuario esta en la pagina de Login', async function () {
      browser = await chromium.launch({headless: false})
      page = await browser.newPage()
      await page.goto('https://www.saucedemo.com/v1/')
    });

    When('ingresa el username y password', async function () {
      await page.locator('#user-name').fill('standard_user')
      await page.locator('#password').fill('secret_sauce')
    });

    Then('click en boton Login', async function () {
      await page.waitForTimeout(2000)
      await page.locator('#login-button').click({force: true})
      await page.waitForTimeout(2000)
      await page.close()
      await browser.close()
    });

    When('ingresa el username {string} y password {string}', async function (usename, password) {
      await page.locator('#user-name').fill(usename)
      await page.locator('#password').fill(password)
    });