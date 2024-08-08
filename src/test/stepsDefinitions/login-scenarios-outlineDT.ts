import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, chromium, expect, Page } from "@playwright/test";

let browser: Browser;
let page: Page;

    Given('el ingresa en la pagina web', async function () {
        browser = await chromium.launch({ headless: false })
        page = await browser.newPage()
        await page.goto('https://www.saucedemo.com/v1/')
    });

    When('ingresa el user {string} y el password {string}', async function (username, password) {
        await page.locator('#user-name').fill(username)
        await page.locator('#password').fill(password)
    });

    Then('da click en login', async function () {
        await page.waitForTimeout(2000)
        await page.locator('#login-button').click({ force: true })
        await page.waitForTimeout(2000)
        
    });

    Then('puede ver el texto {string}', async function (text) {
        
        const msj = await page.locator('.product_label').textContent()
        if(msj == text){
            expect(msj).toEqual(text)
            console.log('mensaje',msj)
        }else{
            const msj = await page.locator("//div[@class='login-box']//button[1]").textContent()
            expect(msj).toEqual(text)
            console.log('mensaje',msj)
        }
        
        await page.close()
        await browser.close()
    });