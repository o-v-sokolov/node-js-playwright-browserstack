import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'
import { Image } from '@lib/elements/image'

export class Home extends BaseDesktopPage {
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
	inStoreImg: Image
	mobileAutoImg: Image
	buyNowImg: Image
	insuranceClaimImg
	freeInspectionImg: Image
	autoGlassServicingImg: Image
	systemCalibrationImg: Image

	constructor(page: Page) {
		super(page, 'Home page', '')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.findLocation = new Button('Find a Location', this.page.locator('.css-m7lhwd .css-e33kag'), true)
		this.getQuote = new Button('Get a Quote', this.page.locator('[title="Link to /online-estimate/"] .css-wd0exg'), true)

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
		this.freeInspectionImg = new Image('Free Inspection image', this.page.locator('[alt="Auto glass expert with clipboard"]'), true)
		this.freeInspection = new Label('Free Inspection', this.page.locator('h3 >> text="Free Inspection"'), true)
		this.findLocation2 = new Button('Find a location', this.page.locator('#tabpanel-0 .css-wd0exg >> text="Find a location"'))
		this.autoGlassServicingImg = new Image('Auto Glass image', this.page.locator('[alt="Two Mechanics Replacing Windshield"]'), true)
		this.autoGlassServicing = new Label('Auto Glass Servicing', this.page.locator('h3 >> text="Auto Glass Servicing"'), true)
		this.learnMore = new Button('Learn More', this.page.locator('.css-wd0exg >> text="Learn More"').nth(0))
		this.systemCalibrationImg = new Image('System Calibration image', this.page.locator('[alt="Woman with iPad"]'), true)
		this.systemCalibration = new Label('System Calibration', this.page.locator('h3 >> text="System Calibration"'), true)
		this.learnMore2 = new Button('Learn More', this.page.locator('.css-wd0exg >> text="Learn More"').nth(1))

		this.whereServicing = new Label('Where Do I Go For Servicing?', this.page.locator('#tab-1'), true)
		this.inStoreImg = new Image('In-Store image', this.page.locator('[alt="Customer Paying in Store"]'))
		this.inStore = new Label('In-Store Auto Glass Repair', this.page.locator('#tabpanel-1 h3 >> text="In-Store Auto Glass Repair"'))
		this.findLocation3 = new Button('Find a location', this.page.locator('#tabpanel-1 .css-wd0exg >> text="Find a location"'))
		this.mobileAutoImg = new Image('Mobile Auto image', this.page.locator('[alt="AGN Mobile Repair Van"]'))
		this.mobileAutoGlassRepair = new Label('Mobile Auto Glass Repair', this.page.locator('#tabpanel-1 h3 >> text="Mobile Auto Glass Repair"'))
		this.learnMore3 = new Button('Learn More', this.page.locator('#tabpanel-1 .css-wd0exg >> text="Learn More"'))

		this.howPay = new Label('How do I pay for my service?', this.page.locator('#tab-2'), true)
		this.buyNowImg = new Image('Buy Now image', this.page.locator('[alt="Front desk employee with ZIP sign"]'))
		this.buyNowPayLater = new Label('Buy Now, Pay Later', this.page.locator('#tabpanel-2 h3 >> text="Buy Now, Pay Later"'))
		this.learnMore4 = new Button('Learn More', this.page.locator('#tabpanel-2 .css-wd0exg >> text="Learn More"').nth(0))
		this.insuranceClaimImg = new Image('Insurance Claim image', this.page.locator('[alt="Insurance agent holding a clipboard while touching a damaged windshield."]'))
		this.insuranceClaim = new Label('Insurance Claim', this.page.locator('#tabpanel-2 h3 >> text="Insurance Claim"'))
		this.learnMore5 = new Button('Learn More', this.page.locator('#tabpanel-2 .css-wd0exg >> text="Learn More"').nth(1))
	}

	async switchTab(tab: number): Promise<boolean> {
		await this.whereServicing.scrollIntoViewIfNeeded();
	
		switch (tab) {
			case 2:
				await this.whereServicing.click();
				break;
			case 3:
				await this.howPay.click();
				break;
			default:
				this.logger.warn(`Invalid tab number ${tab}`);
				return false;
		}
	
		const state = await this.getCurrentTabState(tab);
		if (!state) {
			this.logger.warn(`It is impossible to switch to tab ${tab}`);
			return false;
		}
	
		return true;
	}
	
	private async getCurrentTabState(tab: number): Promise<boolean> {
		switch (tab) {
			case 2:
				return await this.whereServicing.getAttribute('aria-selected') === 'true';
			case 3:
				return await this.howPay.getAttribute('aria-selected') === 'true';
			default:
				return false;
		}
	}
	

	async isOk() {
		if (!(await super.isOk())) return false

		const stateTab2 = await this.switchTab(2)
		if (stateTab2) {
			await this.inStoreImg.waitForBeVisible()
			await this.mobileAutoImg.waitForBeVisible()
			if (!(await this.inStoreImg.isOk())) return false
			if (!(await this.inStore.isOk())) return false
			if (!(await this.findLocation3.isOk())) return false
			if (!(await this.mobileAutoImg.isOk())) return false
			if (!(await this.mobileAutoGlassRepair.isOk())) return false
			if (!(await this.learnMore3.isOk())) return false
		}

		const stateTab3 = await this.switchTab(3)
		if (stateTab3) {
			await this.waitForTimeout()
			await this.buyNowImg.waitForBeVisible()
			await this.insuranceClaimImg.waitForBeVisible()
			if (!(await this.buyNowImg.isOk())) return false
			if (!(await this.buyNowPayLater.isOk())) return false
			if (!(await this.learnMore4.isOk())) return false
			if (!(await this.insuranceClaimImg.isOk())) return false
			if (!(await this.insuranceClaim.isOk())) return false
			if (!(await this.learnMore5.isOk())) return false
		}

		this.logger.info('Is OK')
		return true
	}
}