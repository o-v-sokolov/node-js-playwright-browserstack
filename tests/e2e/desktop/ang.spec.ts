import { test, expect } from '@lib/fixture'
import { HomePage } from '@lib/desktop/pages/home_page'
import { WindshieldRepair } from '@lib/desktop/pages/windshield_repair'
import { WindshieldReplacement } from '@lib/desktop/pages/windshield_replacement'
import { CarWindow } from '@lib/desktop/pages/car_window'
import { MobileAutoGlassRepair } from '@lib/desktop/pages/mobile_auto_glass_repair'

test.describe('ANG pages', () => {
	let homePage: HomePage
	let windshieldRepair: WindshieldRepair
	let windshieldReplacement: WindshieldReplacement
	let carWindow: CarWindow
	let mobileAutoGlassRepair: MobileAutoGlassRepair

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page)
		windshieldRepair = new WindshieldRepair(page)
		windshieldReplacement = new WindshieldReplacement(page)
		carWindow = new CarWindow(page)
		mobileAutoGlassRepair = new MobileAutoGlassRepair(page)
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

	test('Test "Car Window & Rear Windshield Replacement" page', async ({}) => {
		test.slow();
		await test.step('Go to "Car Window & Rear Windshield Replacement" page', async () => {
			await carWindow.open()
		})
		await test.step('Check "Car Window & Rear Windshield Replacement" page', async () => {
			await expect.soft(carWindow, `The integrity of the "${carWindow.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Mobile Auto Glass Repair" page', async ({}) => {
		test.slow();
		await test.step('Go to "Mobile Auto Glass Repair" page', async () => {
			await mobileAutoGlassRepair.open()
		})
		await test.step('Check "Mobile Auto Glass Repair" page', async () => {
			await expect.soft(mobileAutoGlassRepair, `The integrity of the "${mobileAutoGlassRepair.pageName}" is broken.`).toBeOk()
		})
	})
})
