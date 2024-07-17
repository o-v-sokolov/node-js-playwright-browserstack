import { test, expect } from '@lib/fixture'
import { Home } from '@lib/desktop/pages/home'
import { WindshieldRepair } from '@lib/desktop/pages/windshield_repair'
import { WindshieldReplacement } from '@lib/desktop/pages/windshield_replacement'
import { CarWindow } from '@lib/desktop/pages/car_window'
import { MobileAutoGlassRepair } from '@lib/desktop/pages/mobile_auto_glass_repair'
import { Calibration } from '@lib/desktop/pages/calibration'
import { BuyNowPayLater } from '@lib/desktop/pages/buy_now'
import { PaymentOptions } from '@lib/desktop/pages/payment_options'
import { InsuranceClaimsManagement } from '@lib/desktop/pages/insurance_claims_management'
import { AboutUs } from '@lib/desktop/pages/about_us'
import { Warranty } from '@lib/desktop/pages/warranty'
import { ContactUs } from '@lib/desktop/pages/contact_us'

test.describe('ANG pages', () => {
	let home: Home
	let windshieldRepair: WindshieldRepair
	let windshieldReplacement: WindshieldReplacement
	let carWindow: CarWindow
	let mobileAutoGlassRepair: MobileAutoGlassRepair
	let calibration: Calibration
	let buyNowPayLater: BuyNowPayLater
	let paymentOptions: PaymentOptions
	let insuranceClaimsManagement: InsuranceClaimsManagement
	let aboutUs: AboutUs
	let warranty: Warranty
	let contactUs: ContactUs

	test.beforeEach(async ({ page }) => {
		home = new Home(page)
		windshieldRepair = new WindshieldRepair(page)
		windshieldReplacement = new WindshieldReplacement(page)
		carWindow = new CarWindow(page)
		mobileAutoGlassRepair = new MobileAutoGlassRepair(page)
		calibration = new Calibration(page)
		buyNowPayLater = new BuyNowPayLater(page)
		paymentOptions = new PaymentOptions(page)
		insuranceClaimsManagement = new InsuranceClaimsManagement(page)
		aboutUs = new AboutUs(page)
		warranty = new Warranty(page)
		contactUs = new ContactUs(page)
	})

	test('Test home page', async ({}) => {
		test.slow();
		await test.step('Go to home page', async () => {
			await home.open()
		})
		await test.step('Check home page', async () => {
			await expect.soft(home, `The integrity of the "${home.pageName}" is broken.`).toBeOk()
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

	test('Test "Insurance Claims Management" page', async ({}) => {
		test.slow();
		await test.step('Go to "Insurance Claims Management" page', async () => {
			await insuranceClaimsManagement.open()
		})
		await test.step('Check "Insurance Claims Management" page', async () => {
			await expect.soft(insuranceClaimsManagement, `The integrity of the "${insuranceClaimsManagement.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "About us" page', async ({}) => {
		test.slow();
		await test.step('Go to "About us" page', async () => {
			await aboutUs.open()
		})
		await test.step('Check "About us" page', async () => {
			await expect.soft(aboutUs, `The integrity of the "${aboutUs.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Warranty" page', async ({}) => {
		test.slow();
		await test.step('Go to "Warranty" page', async () => {
			await warranty.open()
		})
		await test.step('Check "Warranty" page', async () => {
			await expect.soft(warranty, `The integrity of the "${warranty.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Contact us" page', async ({}) => {
		test.slow();
		await test.step('Go to "Contact us" page', async () => {
			await contactUs.open()
		})
		await test.step('Check "Contact us" page', async () => {
			await expect.soft(contactUs, `The integrity of the "${contactUs.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test hyper links on the "Home" page', async ({ page, context }) => {
		test.slow();
		await test.step('Go to "Home" page', async () => {
			await home.open()
		})
		await test.step('Click "Locations" links', async () => {
			await home.header.locations.clickToNavigate()
			await expect.soft(page, 'Auto Glass Now® Locations page is not opened').toHaveURL(/our-locations/)
		})
		await test.step('Click "Careers" links', async () => {
			await home.open()
			const newPage = await context.newPage()
			await home.header.careers.clickToNavigate()
			await expect.soft(newPage, 'Careers page is not opened').toHaveURL('https://careers.drivenbrands.com/autoglassnow/us/en/')
			await newPage.close()
		})
		await test.step('Click "Agent Portal" links', async () => {
			await home.open()
			const newPage = await context.newPage()
			await home.header.agentPortal.clickToNavigate()
			await expect.soft(newPage, 'Agent Portal page is not opened').toHaveURL('https://www.agentclaimsdirect.com/s/')
			await newPage.close()
		})
		await test.step('Click "Get a Quote" button on the top page', async () => {
			await home.open()
			await home.header.getQuote.clickToNavigate()
			await expect.soft(page, 'Get Your Auto Glass Quote Now page is not opened').toHaveURL(/online-estimate/)
		})
		await test.step('Click "Find a Location" button', async () => {
			await home.open()
			await home.findLocation.clickToNavigate()
			await expect.soft(page, 'Auto Glass Now® Locations page is not opened').toHaveURL(/our-locations/)
		})
		await test.step('Click "Get a Quote" button on the banner area', async () => {
			await home.open()
			await home.getQuote.clickToNavigate()
			await expect.soft(page, 'Auto Glass Now® Locations page is not opened').toHaveURL(/online-estimate/)
		})
	})
})
