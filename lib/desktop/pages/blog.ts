import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class Blog extends BaseDesktopPage {
	h1: Label



	constructor(page: Page) {
		super(page, 'Blog', '/blog/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.sort = new Label('Sort', this.page.locator('#select-Sort'), true)

		
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
