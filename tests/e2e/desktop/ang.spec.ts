import { test, expect } from '@lib/fixture'
import { HomePage } from '@lib/desktop/pages/home_page'
import { WindshieldRepair } from '@lib/desktop/pages/windshield_repair'
import { WindshieldReplacement } from '@lib/desktop/pages/windshield_replacement'

test.describe('ANG pages', () => {
	let homePage: HomePage
	let windshieldRepair: WindshieldRepair
	let windshieldReplacement: WindshieldReplacement

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page)
		windshieldRepair = new WindshieldRepair(page)
		windshieldReplacement = new WindshieldReplacement(page)
	})

	test('Test home page', async ({}) => {
		test.slow();
		await test.step('Go to home page', async () => {
			await homePage.open()
		})
		await test.step('Check home page', async () => {
			await expect.soft(homePage, `The integrity of the "${homePage.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Windshield Repair" page', async ({}) => {
		test.slow();
		await test.step('Go to "Windshield Repair" page', async () => {
			await windshieldRepair.open()
		})
		await test.step('Check "Windshield Repair" page', async () => {
			await expect.soft(windshieldRepair, `The integrity of the "${windshieldRepair.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Windshield Replacement" page', async ({}) => {
		test.slow();
		await test.step('Go to "Windshield Replacement" page', async () => {
			await windshieldReplacement.open()
		})
		await test.step('Check "Windshield Replacement" page', async () => {
			await expect.soft(windshieldReplacement, `The integrity of the "${windshieldReplacement.pageName}" is broken.`).toBeOk()
		})
	})
})
