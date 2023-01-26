// @ts-check
import { test, expect } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'
const LOCALHOST_URL = 'http://localhost:5173'

test('app shows random fact and image', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContent = await text.textContent()
  const imageUrl = await image.getAttribute('src')

  // Expect a text content to be longer than 0.
  expect(textContent?.length).toBeGreaterThan(0)

  // Expect an image URL to start with the prefix.
  expect(imageUrl?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
