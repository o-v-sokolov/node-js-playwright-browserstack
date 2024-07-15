import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'
import { Image } from '@lib/elements/image'

export class PaymentOptions extends BaseDesktopPage {
	h1: Label
	h2: Label
	text: Label
	buyNowPayLater: Button
	insuranceClaimsManagement: Button

	constructor(page: Page) {
		super(page, 'Payment Options', '/payment-options/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.h2 = new Label('H2', this.page.locator('h2'), true)
		this.text = new Label('Text', this.page.locator('.css-1knjxg1'), true)

		this.buyNowPayLater = new Button('Buy Now, Pay Later', this.page.locator('.css-15aqn5l [title="Link to /buy-now-pay-later/"] >> text="Buy Now, Pay Later"'), true)
		this.insuranceClaimsManagement = new Button('Insurance Claims Management', this.page.locator('.css-15aqn5l [title="Link to /insurance-claims-management/"] >> text="Insurance Claims Management"'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
