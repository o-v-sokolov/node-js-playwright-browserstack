import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class InsuranceClaimsManagement extends BaseDesktopPage {
	h1: Label
	makingLife: Label
	text: Label
	howDoWeHelp: Label
	responsible: Label
	findLocation: Button
	buyNowPayLater: Button
	findShopForLocalPromotions: Button

	constructor(page: Page) {
		super(page, 'Insurance Claims Management', '/insurance-claims-management/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.makingLife = new Label('Making Life Simple for You', this.page.locator('.css-bf08z .css-5ijt88'), true)
		this.text = new Label('Text', this.page.locator('.css-1knjxg1 .css-qrxt0m'), true)
		this.howDoWeHelp = new Label('How Do We Help', this.page.locator('.css-j7qwjs .css-5ijt88').nth(0), true)
		this.responsible = new Label('What Are You Responsible For?', this.page.locator('.css-5s67bu h2'), true)
		this.findLocation = new Button('Find A Location', this.page.locator('.css-6lzzp6 [title="Link to /our-locations/"] >> text="Find a Location"'), true)

		this.buyNowPayLater = new Button('Buy Now, Pay Later', this.page.locator('.css-15aqn5l [title="Link to /buy-now-pay-later/"] >> text="Buy Now, Pay later"'), true)
		this.findShopForLocalPromotions = new Button('Find Shop for Local Promotions', this.page.locator('.css-15aqn5l [title="Link to /our-locations/"] >> text="Find Shop for Local Promotions"'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
