import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class AboutUs extends BaseDesktopPage {
	h1: Label
	h2: Label
	text: Label
	ourValues: Label
	drivenBrands: Label
	familyDrivenBrands: Label

	constructor(page: Page) {
		super(page, 'About us', '/about-us/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.h2 = new Label('H2', this.page.locator('.css-bf08z h2'), true)
		this.text = new Label('Text', this.page.locator('.css-1knjxg1 .css-qrxt0m'), true)
		this.ourValues = new Label('Our Values', this.page.locator('.css-15m7qfy .css-6sb9m8'), true)
		this.drivenBrands = new Label('Driven Brands', this.page.locator('.css-cystk9'), true)
		this.familyDrivenBrands = new Label('Family of Driven Brands', this.page.locator('.css-17ygmjm .css-6sb9m8').nth(1), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
