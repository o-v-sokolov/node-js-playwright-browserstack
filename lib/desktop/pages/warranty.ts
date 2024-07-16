import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class Warranty extends BaseDesktopPage {
	h1: Label
	description: Label
	text: Label
	how: Label
	warrantyLimitations: Label
	findLocation: Button

	constructor(page: Page) {
		super(page, 'Warranty', '/warranty/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.text = new Label('Text', this.page.locator('.css-1knjxg1 .css-qrxt0m').nth(0), true)
		this.how = new Label('How Does Our Warranty Process Work?', this.page.locator('.css-wlwua9').nth(0), true)
		this.warrantyLimitations = new Label('Warranty Limitations', this.page.locator('.css-wlwua9').nth(1), true)
		this.findLocation = new Button('Find A Location', this.page.locator('.css-6lzzp6 [title="Link to /our-locations/"] >> text="Find A Location"'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
