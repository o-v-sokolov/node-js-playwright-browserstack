import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'
import { Image } from '@lib/elements/image'

export class HomePage extends BaseDesktopPage {
	h1: Label
	description: Label
	findLocation: any
	getQuote: Button
	h2: Label
	img: Image
	text: Label
	bestPriceGuarantee: Label
	professionalTraining: Label
	fastSimple: Label
	insuranceApproved: Label
	qualityService: Label
	priceMatchGuarantee: Label
	howWork: Label
	freeInspection: Label
	findLocation2: Button
	autoGlassServicing: Label
	learnMore: Button
	systemCalibration: Label
	learnMore2: Button
	whereServicing: Label
	inStore: Label
	findLocation3: Button
	mobileAutoGlassRepair: Label
	learnMore3: Button
	howPay: Label
	buyNowPayLater: Label
	learnMore4: Button
	insuranceClaim: Label
	learnMore5: Button
	findNow: Label
	findLocation4: Button

	constructor(page: Page) {
		super(page, 'Home page', '')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.findLocation = new Button('Find a Location', this.page.locator('.css-m7lhwd .css-e33kag'), true)
		this.getQuote = new Button('Get a Quote', this.page.locator('.css-m7lhwd .css-e33kag'), true)

		this.h2 = new Label('H2', this.page.locator('h2'), true)
		this.img = new Image('Image', this.page.locator('.css-1psf1h8 .css-6sb9m8'), true)
		this.text = new Label('Text', this.page.locator('.css-1psf1h8 .css-6sb9m8'), true)

		this.bestPriceGuarantee = new Label('Best Price Guarantee', this.page.locator('.css-1vct2t0 >> text="Best Price Guarantee"'), true)
		this.professionalTraining = new Label('Professional Training', this.page.locator('.css-1vct2t0 >> text="Professional Training"'), true)
		this.fastSimple = new Label('Fast & Simple', this.page.locator('.css-1vct2t0 >> text="Fast & Simple"'), true)
		this.insuranceApproved = new Label('Insurance Approved', this.page.locator('.css-1vct2t0 >> text="Insurance Approved"'), true)
		this.qualityService = new Label('Quality Service', this.page.locator('.css-1vct2t0 >> text="Quality Service"'), true)

		this.priceMatchGuarantee = new Label('Price Match Guarantee', this.page.locator('h5'), true)

		this.howWork = new Label('How does it work?', this.page.locator('#tab-0'), true)
		this.freeInspection = new Label('Free Inspection', this.page.locator('h3 >> text="Free Inspection"'), true)
		this.findLocation2 = new Button('Find a location', this.page.locator('#tabpanel-0 .css-wd0exg >> text="Find a location"'))
		this.autoGlassServicing = new Label('Auto Glass Servicing', this.page.locator('h3 >> text="Auto Glass Servicing"'), true)
		this.learnMore = new Button('Learn More', this.page.locator('.css-wd0exg >> text="Learn More"').nth(0))
		this.systemCalibration = new Label('System Calibration', this.page.locator('h3 >> text="System Calibration"'), true)
		this.learnMore2 = new Button('Learn More', this.page.locator('.css-wd0exg >> text="Learn More"').nth(1))

		this.whereServicing = new Label('Where Do I Go For Servicing?', this.page.locator('#tab-1'), true)
		this.inStore = new Label('In-Store Auto Glass Repair', this.page.locator('#tabpanel-1 h3 >> text="In-Store Auto Glass Repair"'))
		this.findLocation3 = new Button('Find a location', this.page.locator('#tabpanel-1 .css-wd0exg >> text="Find a location"'))
		this.mobileAutoGlassRepair = new Label('Mobile Auto Glass Repair', this.page.locator('#tabpanel-1 h3 >> text="Mobile Auto Glass Repair"'))
		this.learnMore3 = new Button('Learn More', this.page.locator('#tabpanel-1 .css-wd0exg >> text="Learn More"'))

		this.howPay = new Label('How do I pay for my service?', this.page.locator('#tab-2'), true)
		this.buyNowPayLater = new Label('Buy Now, Pay Later', this.page.locator('#tabpanel-2 h3 >> text="Buy Now, Pay Later"'))
		this.learnMore4 = new Button('Learn More', this.page.locator('#tabpanel-2 .css-wd0exg >> text="Learn More"').nth(0))
		this.insuranceClaim = new Label('Insurance Claim', this.page.locator('#tabpanel-2 h3 >> text="Insurance Claim"'))
		this.learnMore5 = new Button('Learn More', this.page.locator('#tabpanel-2 .css-wd0exg >> text="Learn More"').nth(1))

		this.findNow = new Label('Auto Glass Servicing', this.page.locator('h3 >> text="Find Your Local Auto Glass Now!"'), true)
		this.findLocation4 = new Button('Find a location', this.page.locator('.css-182s9va'))
	}

	async isOk() {
		if (!(await super.isOk())) return false

		await this.whereServicing.click()
		const stateTab2 = await this.whereServicing.getAttribute('aria-selected')
		if (stateTab2) {

			await this.inStore.waitForBeVisible()
			await this.waitForTimeout()
			if (!(await this.inStore.isOk())) return false
			if (!(await this.findLocation3.isOk())) return false
			if (!(await this.mobileAutoGlassRepair.isOk())) return false
			if (!(await this.learnMore3.isOk())) return false
		}
		else this.logger.warn('It is impossible to switch tab')

		await this.howPay.click()
		const stateTab3 = await this.howPay.getAttribute('aria-selected')
		if (stateTab3) {
			await this.buyNowPayLater.waitForBeVisible()
			if (!(await this.buyNowPayLater.isOk())) return false
			if (!(await this.learnMore4.isOk())) return false
			if (!(await this.insuranceClaim.isOk())) return false
			if (!(await this.learnMore5.isOk())) return false
		}
		else this.logger.warn('It is impossible to switch tab')

		this.logger.info('Is OK')
		return true
	}
}
