import { Page } from '@playwright/test'
import { BasePage } from '@lib/desktop/pages/base_page'
import { Header } from '@lib/desktop/components/header'
import { Footer } from '@lib/desktop/components/footer'


export class BaseDesktopPage extends BasePage {
	header: Header
	footer: Footer

	constructor(page: Page, pageName: string, pageUrl?: string) {
		super(page, pageName, pageUrl)

		this.header = new Header(this.page.locator('.css-pux5gx'))
		this.footer = new Footer(this.page.locator('.css-zv7ju9'))
	}
}
