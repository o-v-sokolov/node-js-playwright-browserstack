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
import { OurLocations } from '@lib/desktop/pages/our_locations'
import { CommercialFleet } from '@lib/desktop/pages/commercial_fleet'
import { Blog } from '@lib/desktop/pages/blog'

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
	let ourLocations: OurLocations
	let commercialFleet: CommercialFleet
	let blog: Blog

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
		ourLocations = new OurLocations(page)
		commercialFleet = new CommercialFleet(page)
		blog = new Blog(page)
	})

	test('Test home page', async ({}) => {
		test.slow()
		await test.step('Go to home page', async () => {
			await home.open()
		})
		await test.step('Check home page', async () => {
			await expect.soft(home, `The integrity of the "${home.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Windshield Repair" page', async ({}) => {
		test.slow()
		await test.step('Go to "Windshield Repair" page', async () => {
			await windshieldRepair.open()
		})
		await test.step('Check "Windshield Repair" page', async () => {
			await expect.soft(windshieldRepair, `The integrity of the "${windshieldRepair.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Windshield Replacement" page', async ({}) => {
		test.slow()
		await test.step('Go to "Windshield Replacement" page', async () => {
			await windshieldReplacement.open()
		})
		await test.step('Check "Windshield Replacement" page', async () => {
			await expect.soft(windshieldReplacement, `The integrity of the "${windshieldReplacement.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Car Window & Rear Windshield Replacement" page', async ({}) => {
		test.slow()
		await test.step('Go to "Car Window & Rear Windshield Replacement" page', async () => {
			await carWindow.open()
		})
		await test.step('Check "Car Window & Rear Windshield Replacement" page', async () => {
			await expect.soft(carWindow, `The integrity of the "${carWindow.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Mobile Auto Glass Repair" page', async ({}) => {
		test.slow()
		await test.step('Go to "Mobile Auto Glass Repair" page', async () => {
			await mobileAutoGlassRepair.open()
		})
		await test.step('Check "Mobile Auto Glass Repair" page', async () => {
			await expect.soft(mobileAutoGlassRepair, `The integrity of the "${mobileAutoGlassRepair.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Calibration" page', async ({}) => {
		test.slow()
		await test.step('Go to "Calibration " page', async () => {
			await calibration.open()
		})
		await test.step('Check "Calibration " page', async () => {
			await expect.soft(calibration, `The integrity of the "${calibration.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Buy Now, Pay Later" page', async ({}) => {
		test.slow()
		await test.step('Go to "Buy Now, Pay Later" page', async () => {
			await buyNowPayLater.open()
		})
		await test.step('Check "Buy Now, Pay Later" page', async () => {
			await expect.soft(buyNowPayLater, `The integrity of the "${buyNowPayLater.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Payment Options" page', async ({}) => {
		test.slow()
		await test.step('Go to "Payment Options" page', async () => {
			await paymentOptions.open()
		})
		await test.step('Check "Payment Options" page', async () => {
			await expect.soft(paymentOptions, `The integrity of the "${paymentOptions.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Insurance Claims Management" page', async ({}) => {
		test.slow()
		await test.step('Go to "Insurance Claims Management" page', async () => {
			await insuranceClaimsManagement.open()
		})
		await test.step('Check "Insurance Claims Management" page', async () => {
			await expect.soft(insuranceClaimsManagement, `The integrity of the "${insuranceClaimsManagement.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "About us" page', async ({}) => {
		test.slow()
		await test.step('Go to "About us" page', async () => {
			await aboutUs.open()
		})
		await test.step('Check "About us" page', async () => {
			await expect.soft(aboutUs, `The integrity of the "${aboutUs.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Warranty" page', async ({}) => {
		test.slow()
		await test.step('Go to "Warranty" page', async () => {
			await warranty.open()
		})
		await test.step('Check "Warranty" page', async () => {
			await expect.soft(warranty, `The integrity of the "${warranty.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test "Contact us" page', async ({}) => {
		test.slow()
		await test.step('Go to "Contact us" page', async () => {
			await contactUs.open()
		})
		await test.step('Check "Contact us" page', async () => {
			await expect.soft(contactUs, `The integrity of the "${contactUs.pageName}" is broken.`).toBeOk()
		})
	})

	test('Test hyper links on the "Home" page', async ({ page, context }) => {
		test.slow()
		let newTabPage: any
		await test.step('Go to "Home" page', async () => {
			await home.open()
		})
		await test.step('Click "Locations" links', async () => {
			await home.header.locations.clickToNavigate()
			await expect.soft(page, `"${ourLocations.pageName}" page is not opened`).toHaveURL(/our-locations/)
		})
		await test.step('Click "Careers" links', async () => {
			await home.open()
			;[newTabPage] = await Promise.all([
				context.waitForEvent('page'),
				home.header.careers.click()])
			expect.soft(newTabPage.url()).toContain('careers.drivenbrands.com/autoglassnow/us/en')
		})
		await test.step('Click "Agent Portal" links', async () => {
			await home.open()
			;[newTabPage] = await Promise.all([
				context.waitForEvent('page'),
				home.header.agentPortal.click()])
			expect.soft(newTabPage.url(), '"Agent Portal" page is not opened').toContain('www.agentclaimsdirect.com/s')
		})
		await test.step('Click "Get a Quote" button on the top page', async () => {
			await home.open()
			await home.header.getQuote.clickToNavigate()
			await expect.soft(page, '"Get Your Auto Glass Quote Now" page is not opened').toHaveURL(/online-estimate/)
		})
		await test.step('Click "Find a Location" button', async () => {
			await home.open()
			await home.findLocation.clickToNavigate()
			await expect.soft(page, `"${ourLocations.pageName}" page is not opened`).toHaveURL(/our-locations/)
		})
		await test.step('Click "Get a Quote" button on the banner area', async () => {
			await home.open()
			await home.getQuote.clickToNavigate()
			await expect.soft(page, '"Get Your Auto Glass Quote Now" page is not opened').toHaveURL(/online-estimate/)
		})
		await test.step('Click "Find A Location" button on the "How does it work?"  area', async () => {
			await home.open()
			await home.findLocation2.clickToNavigate()
			await expect.soft(page, `"${ourLocations.pageName}" page is not opened`).toHaveURL(/our-locations/)
		})
		await test.step(`Click ${home.learnMore.name} button on the ${home.autoGlassServicing.name} area`, async () => {
			await home.open()
			await home.learnMore.clickToNavigate()
			await expect.soft(page, '"Auto Glass Repair and Replacement Services" page is not opened').toHaveURL(/auto-glass-services/)
		})
		await test.step(`Click ${home.learnMore2.name} button on the ${home.systemCalibration.name} area`, async () => {
			await home.open()
			await home.learnMore2.clickToNavigate()
			await expect.soft(page, `"${calibration.pageName}" page is not opened`).toHaveURL(/calibration/)
		})
		await test.step(`Click ${home.findLocation3.name} button on the ${home.whereServicing.name} area`, async () => {
			await home.open()
			await home.switchTab(2)
			await home.findLocation3.clickToNavigate()
			await expect.soft(page, `"${ourLocations.pageName}" page is not opened`).toHaveURL(/our-locations/)
		})
		await test.step(`Click ${home.learnMore3.name} button on the ${home.whereServicing.name} area`, async () => {
			await home.open()
			await home.switchTab(2)
			await home.learnMore3.clickToNavigate()
			await expect.soft(page, `"${mobileAutoGlassRepair.pageName}" page is not opened`).toHaveURL(/auto-glass-services\/mobile-auto-glass-repair/)
		})
		await test.step(`Click ${home.learnMore4.name} button on the ${home.howPay.name} area`, async () => {
			await home.open()
			await home.switchTab(3)
			await home.learnMore4.clickToNavigate()
			await expect.soft(page, `"${buyNowPayLater.pageName}" page is not opened`).toHaveURL(/buy-now-pay-later/)
		})
		await test.step(`Click ${home.learnMore5.name} button on the ${home.howPay.name} area`, async () => {
			await home.open()
			await home.switchTab(3)
			await home.learnMore5.clickToNavigate()
			await expect.soft(page, `"${insuranceClaimsManagement.pageName}" page is not opened`).toHaveURL(/insurance-claims-management/)
		})
	})

	test('Test footer links on the "Home" page', async ({ page, context }) => {
		test.slow()
		let newTabPage: any
		await test.step('Go to "Home" page', async () => {
			await home.open()
		})
		await test.step(`Click ${home.footer.autoGlass.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.autoGlass.clickToNavigate()
			await expect.soft(page, `"${ourLocations.pageName}" page is not opened`).toHaveURL(/auto-glass-services/)
		})
		await test.step(`Click ${home.footer.windshieldRepair.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.windshieldRepair.clickToNavigate()
			await expect.soft(windshieldRepair, `The integrity of the "${windshieldRepair.pageName}" is broken.`).toBeOk()
		})
		await test.step(`Click ${home.footer.windshieldReplacement.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.windshieldReplacement.clickToNavigate()
			await expect.soft(page, `"${windshieldReplacement.pageName}" page is not opened`).toHaveURL(/auto-glass-services\/windshield-replacement/)
		})
		await test.step(`Click ${home.footer.carWindow.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.carWindow.clickToNavigate()
			await expect.soft(page, `"${carWindow.pageName}" page is not opened`).toHaveURL(/auto-glass-services\/car-window-rear-windshield-replacement/)
		})
		await test.step(`Click ${home.footer.insurance.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.insurance.clickToNavigate()
			await expect.soft(page, `"${insuranceClaimsManagement.pageName}" page is not opened`).toHaveURL(/insurance-claims-management/)
		})
		await test.step(`Click ${home.footer.aboutUs.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.aboutUs.clickToNavigate()
			await expect.soft(page, `"${aboutUs.pageName}" page is not opened`).toHaveURL(/about-us/)
		})
		await test.step(`Click ${home.footer.buyNowPayLater.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.buyNowPayLater.clickToNavigate()
			await expect.soft(page, `"${buyNowPayLater.pageName}" page is not opened`).toHaveURL(/buy-now-pay-later/)
		})
		await test.step(`Click ${home.footer.fleetCommercial.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.fleetCommercial.clickToNavigate()
			await expect.soft(commercialFleet, `The integrity of the "${commercialFleet.pageName}" is broken.`).toBeOk()
		})
		await test.step(`Click ${home.footer.blog.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			await home.footer.blog.clickToNavigate()
			await expect.soft(blog, `The integrity of the "${blog.pageName}" is broken.`).toBeOk()
		})
		await test.step(`Click ${home.footer.careers.name} button on the ${home.footer.name} area`, async () => {
			await home.open()
			;[newTabPage] = await Promise.all([
				context.waitForEvent('page'),
				home.footer.careers.click()])
			expect.soft(newTabPage.url()).toContain('careers.drivenbrands.com/autoglassnow/us/en')
		})
	})
})
