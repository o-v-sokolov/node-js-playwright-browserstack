import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'

export class HomePage extends BaseDesktopPage {
	constructor(page: Page) {
		super(page, 'Home page', '')
		// TODO
	}

	async isOk() {
		this.logger.info('Is OK')
		return true
	}
}
