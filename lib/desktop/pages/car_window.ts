import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class CarWindow extends BaseDesktopPage {
	h1: Label
	description: Label
	text: Label
	learnMore: Button
	whenShouldMyCarWindowOrRearWindshieldBeReplaced: Label
	needReplacement: Label
	learn: Label
	learnMore2: Button
	findLocation2: Button
	findLocation3: Button
	windshieldRepair: Button
	windshieldReplacement: Button
	mobileAutoRepairService: Button

	constructor(page: Page) {
		super(page, 'Rear Windshield Replacement Services', '/auto-glass-services/car-window-rear-windshield-replacement/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.whenShouldMyCarWindowOrRearWindshieldBeReplaced = new Label('When Should My Car Window Or Rear Windshield Be Replaced?', this.page.locator('.css-bf08z h2'), true)
		this.text = new Label('Text', this.page.locator('.css-1knjxg1 .css-qrxt0m').nth(0), true)

		this.needReplacement = new Label('Need a Replacement?', this.page.locator('.css-1hy2q6x'), true)

		this.findLocation2 = new Button('Find A Location 2', this.page.locator('.css-6lzzp6 [title="Link to /our-locations/"] >> text="Find A Location"').nth(0), true)
		this.findLocation3 = new Button('Find A Location 3', this.page.locator('.css-6lzzp6 [title="Link to /our-locations/"] >> text="Find A Location"').nth(1), true)

		this.learn = new Label('Learn About Our Various Payment Options At Your Disposal', this.page.locator('.css-15m7qfy h2.css-5ijt88'), true)
		this.learnMore = new Button('Learn More in Buy Now, Pay Later', this.page.locator('[title="Link to /buy-now-pay-later/"] >> text="Learn More"'), true)
		this.learnMore2 = new Button('Learn More in Insurance Claims Management', this.page.locator('[title="Link to /insurance-claims-management/"] >> text="Learn More"'), true)

		this.windshieldRepair = new Button('Windshield Replacement', this.page.locator('.css-1x1a9kx [title="Link to /auto-glass-services/windshield-repair/"] >> text="Windshield Repair"'), true)
		this.windshieldReplacement = new Button('Windshield Replacement', this.page.locator('.css-1x1a9kx >> text="Windshield Replacement"'), true)
		this.mobileAutoRepairService = new Button('Mobile Auto Repair Service', this.page.locator('.css-1x1a9kx [title="Link to /auto-glass-services/mobile-auto-glass-repair/"] >> text="Mobile Auto Repair Service"'), true)

	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
