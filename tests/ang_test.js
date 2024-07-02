const { expect, test } = require('@playwright/test');
const sleep = require('util').promisify(setTimeout)

test('Testing menu pages', async ({ page }) => {
  await page.goto('https://www.autoglassnow.com/');
  let title = await page.title();
  expect.soft(title).toContain('Reliable Auto Glass & Windshield Repair | Auto Glass Now®');

  await page.goto('https://www.autoglassnow.com/auto-glass-services/');
  title = await page.title();
  expect.soft(title).toContain('Auto Glass Repair and Replacement - Auto Glass Now®');

  await page.goto('https://www.autoglassnow.com/auto-glass-services/windshield-repair/');
  title = await page.title();
  expect.soft(title).toContain('Fast Windshield Chip & Crack Repair | Auto Glass Now®');

  await page.goto('https://www.autoglassnow.com/auto-glass-services/windshield-replacement/');
  title = await page.title();
  expect.soft(title).toContain('Same-Day Car Windshield Replacement | Auto Glass Now®');

  await page.goto('https://www.autoglassnow.com/auto-glass-services/car-window-rear-windshield-replacement/');
  title = await page.title();
  expect.soft(title).toContain('Rear Windshield Replacement Services | Auto Glass Now®');

  await page.goto('https://www.autoglassnow.com/auto-glass-services/mobile-auto-glass-repair/');
  title = await page.title();
  expect.soft(title).toContain('Mobile Auto Glass Repair and Replacement - Auto Glass Now®');

  await page.goto('https://www.autoglassnow.com/calibration/');
  title = await page.title();
  expect.soft(title).toContain('ADAS Windshield Camera Calibration | Auto Glass Now®');
});
