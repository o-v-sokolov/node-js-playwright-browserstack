import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class CommercialFleet extends BaseDesktopPage {
	h1: Label
	serviceYouCanCountOn: Label
	autoGlassRepairReplacements: Label
	learnMore: Button
	learnMore2: Button
	learnMore3: Button

	constructor(page: Page) {
		super(page, 'Commercial & Fleet Auto Glass Services', '/fleet-commercial/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.serviceYouCanCountOn = new Label('Service You Can Count On', this.page.locator('.css-17ygmjm h2'), true)
		this.autoGlassRepairReplacements = new Label('Auto Glass Repair & Replacements', this.page.locator('.css-15m7qfy h2'), true)
		this.learnMore = new Button('Learn More in Windshield Replacement', this.page.locator('.css-8oivvu [title="Link to /auto-glass-services/windshield-replacement/"]'), true)
		this.learnMore2 = new Button('Learn More in Car Window and Rear Windshield Replacement', this.page.locator('.css-8oivvu [title="Link to /auto-glass-services/car-window-rear-windshield-replacement/"]'), true)
		this.learnMore3 = new Button('Learn More in Advanced Driver Assistance Systems', this.page.locator('.css-8oivvu [title="Link to /calibration/"]'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
