import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class ContactUs extends BaseDesktopPage {
	h1: Label
	text: Label
	findLocation: Button
	h2: Label
	headOfficeEmail: Label
	address: Label
	mediaInquiriesEmail: Label

	constructor(page: Page) {
		super(page, 'Contact us', '/contact-us/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.text = new Label('Text', this.page.locator('.css-1psf1h8 .css-6sb9m8'), true)
		this.findLocation = new Button('Find A Location', this.page.locator('.css-6lzzp6 [title="Link to /our-locations/"]'), true)
		this.h2 = new Label('We Are Here To Answer Your Questions, Contact Us Today!', this.page.locator('.css-5ijt88'), true)
		this.headOfficeEmail = new Label('Head Office Email', this.page.locator('[title="Email mailto:writeus@autoglassnow.com"]'), true)
		this.address = new Label('Address', this.page.locator('[href="https://goo.gl/maps/hBGXNjx5VJ1pXngT6"]'), true)
		this.mediaInquiriesEmail = new Label('Media Inquiries Email', this.page.locator('[title="Email mailto:connect@drivenbrands.com"]'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
