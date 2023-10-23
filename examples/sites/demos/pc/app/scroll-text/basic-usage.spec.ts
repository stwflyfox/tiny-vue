import { test, expect } from '@playwright/test'

test('基本用法', async ({ page }) => {
  page.on('pageerror', (exception) => expect(exception).toBeNull())
  await page.goto('http://localhost:7130/pc/scroll-text/basic-usage')
  await expect(page.locator('.tiny-scroll-text__content')).toHaveCSS('animation-name', 'moveLeft')
})