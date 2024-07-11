import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class BuyNowPayLater extends BaseDesktopPage {
	h1: Label
	description: Label
	text: Label
	howDoesZIPWork: Label
	frequentlyAskedQuestions: Label
	additionalPaymentOptions: Label
	insuranceClaimsManagement: Button
	findShopForLocalPromotions: Button

	constructor(page: Page) {
		super(page, 'Buy Now, Pay Later', '/buy-now-pay-later/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)

		this.howDoesZIPWork = new Label('How Does ZIP Work?', this.page.locator('h2.css-5ijt88').nth(0), true)
		this.text = new Label('Text', this.page.locator('.css-f7nqr1 .css-qrxt0m'), true)

		this.frequentlyAskedQuestions = new Label('Frequently Asked Questions', this.page.locator('h2.css-5ijt88').nth(1), true)

		this.additionalPaymentOptions = new Label('Additional Payment Options', this.page.locator('h2.css-5ijt88').nth(2), true)

		this.insuranceClaimsManagement = new Button('Insurance Claims Management', this.page.locator('.css-15aqn5l [title="Link to /insurance-claims-management/"] >> text="Insurance Claims Management"'), true)
		this.findShopForLocalPromotions = new Button('Find Shop for Local Promotions', this.page.locator('[title="Link to /our-locations/"] >> text="Find Shop for Local Promotions"'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
