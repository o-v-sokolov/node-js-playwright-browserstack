import { test, expect } from '@lib/fixture'
import { HomePage } from '@lib/desktop/pages/home_page'

test.describe('ANG pages', () => {
	let homePage: HomePage

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page)

	})

	test('Test home page', async ({}) => {
		await test.step('Go to AboutUs page', async () => {
			await homePage.open()
			await expect.soft(homePage, `The integrity of the "${homePage.pageName}" is broken.`).toBeOk()
		})
	})
})
