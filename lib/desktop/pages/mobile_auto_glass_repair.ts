import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class MobileAutoGlassRepair extends BaseDesktopPage {
	h1: Label
	description: Label
	text: Label
	learnMore: Button
	whyNotLetUsComeToYou: Label
	findLocation: Button
	windshieldRepair: Button
	windshieldReplacement: Button
	carWindow: Button

	constructor(page: Page) {
		super(page, 'Mobile Auto Glass Repair', '/auto-glass-services/mobile-auto-glass-repair/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.whyNotLetUsComeToYou = new Label('Why Not Let Us Come To You?', this.page.locator('h2.css-5ijt88').nth(0), true)
		this.text = new Label('Text', this.page.locator('.css-1knjxg1 .css-qrxt0m').nth(0), true)

		this.findLocation = new Button('Find A Location in Service You Can Count On', this.page.locator('.css-6lzzp6 [title="Link to /our-locations/"] >> text="Find A Location"'), true)
		this.learnMore = new Button('Learn More in Calibrating', this.page.locator('.css-6lzzp6 [title="Link to /calibration/"] >> text="Learn More"'), true)

		this.windshieldRepair = new Button('Windshield Replacement', this.page.locator('.css-1x1a9kx [title="Link to /auto-glass-services/windshield-repair/"] >> text="Windshield Repair"'), true)
		this.windshieldReplacement = new Button('Windshield Replacement', this.page.locator('.css-1x1a9kx >> text="Windshield Replacement"'), true)
		this.carWindow = new Button('Car Window & Rear Windshield Replacement', this.page.locator('.css-1x1a9kx [title="Link to /auto-glass-services/car-window-rear-windshield-replacement/"] >> text="Car Window & Rear Windshield Replacement"'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
