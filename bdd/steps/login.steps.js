const { Given, When, Then } = require('@cucumber/cucumber')
const { chromium } = require('@playwright/test')
const { expect } = require('chai')

let browser, page

Given('I am on the login page', async () => {
  browser = await chromium.launch()
  const context = await browser.newContext()
  page = await context.newPage()
  await page.goto('https://the-internet.herokuapp.com/login')
})

When('I enter username {string}', async (username) => {
  await page.fill('#username', username)
})

When('I enter password {string}', async (password) => {
  await page.fill('#password', password)
})

When('I click the login button', async () => {
  await page.click('button[type="submit"]')
})

Then('I should be redirected to the secure area', async () => {
  const url = page.url()
  expect(url).to.include('/secure')
})

Then('I should see a success message', async () => {
  const message = await page.locator('.flash.success').isVisible()
  expect(message).to.be.true
  await browser.close()
})

Then('I should see an error message', async () => {
  const message = await page.locator('.flash.error').isVisible()
  expect(message).to.be.true
  await browser.close()
})

Then('I should remain on the login page', async () => {
  const url = page.url()
  expect(url).to.include('/login')
})
