import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'
export class WindshieldReplacement extends BaseDesktopPage {
	h1: Label
	description: Label
	whenShouldMyWindshieldBeReplaced: Label
	text: Label
	text2: Label
	needRepair: Label
	h3: Label
	findLocation: Button
	findLocation2: Button
	learn: Label
	learnMore: Button
	learnMore2: Button
	learnMore3: Button
	findLocation3: Button
	windshieldRepair: Button
	carWindow: Button
	mobileAutoRepairService: Button

	constructor(page: Page) {
		super(page, 'Same-Day Car Windshield Replacement', '/auto-glass-services/windshield-replacement/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.whenShouldMyWindshieldBeReplaced = new Label('When Should My Windshield Be Replaced?', this.page.locator('.css-bf08z h3'), true)
		this.text = new Label('Text', this.page.locator('.css-1xhj18k .css-qrxt0m'), true)
		this.text2 = new Label('Text2', this.page.locator('.css-1xhj18k .css-qrxt0m'), true)
		this.needRepair = new Label('Need a repair?', this.page.locator('.css-1hy2q6x'), true)
		this.h3 = new Label('We Exceed Industry Safety Standards', this.page.locator('.css-btcy8u'), true)
		this.findLocation = new Button('Find a location', this.page.locator('[title="Link to /our-locations/"] >> text="Find A Location"').nth(0), true)
		this.findLocation2 = new Button('Find a location2', this.page.locator('[title="Link to /our-locations/"] >> text="Find A Location"').nth(1), true)
		this.learn = new Label('Learn About Our Various Payment Options At Your Disposal', this.page.locator('.css-15m7qfy h2.css-5ijt88'), true)
		this.learnMore = new Button('Learn More in Buy Now, Pay Later', this.page.locator('[title="Link to /buy-now-pay-later/"] >> text="Learn More"'), true)
		this.learnMore2 = new Button('Learn More in Insurance Claims Management', this.page.locator('[title="Link to /insurance-claims-management/"] >> text="Learn More"'), true)

		this.learnMore3 = new Button('Learn More in Calibrating', this.page.locator('[title="Link to /calibration/"] >> text="Learn More"'), true)
		this.findLocation3 = new Button('Find A Location in New Windshield', this.page.locator('.css-1psf1h8 [title="Link to /our-locations/"] >> text="Find A Location"'), true)

		this.windshieldRepair = new Button('Windshield Replacement', this.page.locator('.css-1x1a9kx [title="Link to /auto-glass-services/windshield-repair/"] >> text="Windshield Repair"'), true)
		this.carWindow = new Button('Car Window & Rear Windshield Replacement', this.page.locator('.css-1x1a9kx [title="Link to /auto-glass-services/car-window-rear-windshield-replacement/"] >> text="Car Window & Rear Windshield Replacement"'), true)
		this.mobileAutoRepairService = new Button('Mobile Auto Repair Service', this.page.locator('.css-1x1a9kx [title="Link to /auto-glass-services/mobile-auto-glass-repair/"] >> text="Mobile Auto Repair Service"'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
