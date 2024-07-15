import { test, expect } from '@lib/fixture'
import { HomePage } from '@lib/desktop/pages/home_page'
import { WindshieldRepair } from '@lib/desktop/pages/windshield_repair'
import { WindshieldReplacement } from '@lib/desktop/pages/windshield_replacement'
import { CarWindow } from '@lib/desktop/pages/car_window'
import { MobileAutoGlassRepair } from '@lib/desktop/pages/mobile_auto_glass_repair'
import { Calibration } from '@lib/desktop/pages/calibration'
import { BuyNowPayLater } from '@lib/desktop/pages/buy_now'
import { PaymentOptions } from '@lib/desktop/pages/payment_options'
import { InsuranceClaimsManagement } from '@lib/desktop/pages/insurance_claims_management'

test.describe('ANG pages', () => {
	let homePage: HomePage
	let windshieldRepair: WindshieldRepair
	let windshieldReplacement: WindshieldReplacement
	let carWindow: CarWindow
	let mobileAutoGlassRepair: MobileAutoGlassRepair
	let calibration: Calibration
	let buyNowPayLater: BuyNowPayLater
	let paymentOptions: PaymentOptions
	let insuranceClaimsManagement: InsuranceClaimsManagement

	test.beforeEach(async ({ page }) => {
		homePage = new HomePage(page)
		windshieldRepair = new WindshieldRepair(page)
		windshieldReplacement = new WindshieldReplacement(page)
		carWindow = new CarWindow(page)
		mobileAutoGlassRepair = new MobileAutoGlassRepair(page)
		calibration = new Calibration(page)
		buyNowPayLater = new BuyNowPayLater(page)
		paymentOptions = new PaymentOptions(page)
		insuranceClaimsManagement = new InsuranceClaimsManagement(page)
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

	test('Test "Calibration" page', async ({}) => {
		test.slow();
		await test.step('Go to "Calibration " page', async () => {
			await calibration.open()
		})
		await test.step('Check "Calibration " page', async () => {
			await expect.soft(calibration, `The integrity of the "${calibration.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Buy Now, Pay Later" page', async ({}) => {
		test.slow();
		await test.step('Go to "Buy Now, Pay Later" page', async () => {
			await buyNowPayLater.open()
		})
		await test.step('Check "Buy Now, Pay Later" page', async () => {
			await expect.soft(buyNowPayLater, `The integrity of the "${buyNowPayLater.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Payment Options" page', async ({}) => {
		test.slow();
		await test.step('Go to "Payment Options" page', async () => {
			await paymentOptions.open()
		})
		await test.step('Check "Payment Options" page', async () => {
			await expect.soft(paymentOptions, `The integrity of the "${paymentOptions.pageName}" is broken.`).toBeOk()
		})
	})

	test.only('Test "Insurance Claims Management" page', async ({}) => {
		test.slow();
		await test.step('Go to "Insurance Claims Management" page', async () => {
			await insuranceClaimsManagement.open()
		})
		await test.step('Check "Insurance Claims Management" page', async () => {
			await expect.soft(insuranceClaimsManagement, `The integrity of the "${insuranceClaimsManagement.pageName}" is broken.`).toBeOk()
		})
	})
})
