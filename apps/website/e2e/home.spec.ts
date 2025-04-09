import { test, expect } from '@playwright/test'

test.describe('Home Page', () => {
  test('should display welcome message', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
    await expect(page.getByRole('heading', { name: 'Welcome to Aloshy AI' })).toBeVisible()
    await expect(page.getByText('Your next-generation AI platform')).toBeVisible()
  })

  test('should navigate to documentation', async ({ page }) => {
    await page.goto('http://localhost:3000')
    
    const docLink = page.getByRole('link', { name: 'View Documentation' })
    await expect(docLink).toBeVisible()
    await expect(docLink).toHaveAttribute('href', 'http://localhost:3001')
  })
}) 