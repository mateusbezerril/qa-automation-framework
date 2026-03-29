const { test, expect } = require('@playwright/test')

test.describe('Login Flow - Cross Browser Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login')
  })

  test('should login successfully with valid credentials', async ({ page }) => {
    await page.fill('#username', 'tomsmith')
    await page.fill('#password', 'SuperSecretPassword!')
    await page.click('button[type="submit"]')
    await expect(page.locator('.flash.success')).toContainText('You logged into a secure area!')
    await expect(page).toHaveURL(/.*secure/)
  })

  test('should show error with invalid credentials', async ({ page }) => {
    await page.fill('#username', 'wrong_user')
    await page.fill('#password', 'wrong_pass')
    await page.click('button[type="submit"]')
    await expect(page.locator('.flash.error')).toBeVisible()
    await expect(page).toHaveURL(/.*login/)
  })

  test('should display login form elements', async ({ page }) => {
    await expect(page.locator('#username')).toBeVisible()
    await expect(page.locator('#password')).toBeVisible()
    await expect(page.locator('button[type="submit"]')).toBeVisible()
  })
})
