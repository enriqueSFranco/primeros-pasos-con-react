import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('App shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  await page.waitForSelector('p[data-fact]')
  // Expect a title "to contain" a substring.
  const textFact = await page.$eval('p[data-fact]', (element) => element.textContent)
});
