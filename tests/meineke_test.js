const { expect, test } = require('@playwright/test');
const sleep = require('util').promisify(setTimeout)

test('Testing menu pages', async ({ page }) => {
  await page.goto('https://www.meineke.com/');
  let title = await page.title();
  expect.soft(title).toContain('Car Mechanics, Auto Repair Services, & Oil Changes | Meineke');

  await page.goto('https://www.meineke.com/services/oil-change/');
  title = await page.title();
  expect.soft(title).toContain('Oil Change Services | Meineke Car Care');

  await page.goto('https://www.meineke.com/services/exhaust-mufflers/');
  title = await page.title();
  expect.soft(title).toContain('Exhaust and Muffler Shop Services | Meineke');

  await page.goto('https://www.meineke.com/services/brake-repair/');
  title = await page.title();
  expect.soft(title).toContain('Brake Inspection & Repair Services | Meineke');

  await page.goto('https://www.meineke.com/services/tires-wheels/');
  title = await page.title();
  expect.soft(title).toContain('Tire Alignment, Replacement & Repair Services | Meineke');

  await page.goto('https://www.meineke.com/services/ac-repair/');
  title = await page.title();
  expect.soft(title).toContain('Car AC Repair | Meineke Car Care');

  await page.goto('https://www.meineke.com/services/');
  title = await page.title();
  expect.soft(title).toContain('Auto Repair & Tune-Up Services | Meineke');
});
