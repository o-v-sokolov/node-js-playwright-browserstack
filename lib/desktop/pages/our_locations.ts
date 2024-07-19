import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'
import { Input } from '@lib/elements/input'

export class OurLocations extends BaseDesktopPage {
	h1: Label
	description: Label
	h2: Label
	searchField: Input
	search: Button
	breadcrumbs: Label
	map: Label

	constructor(page: Page) {
		super(page, 'Auto Glass Now® Locations', '/our-locations/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.searchField = new Input('Search field', this.page.locator('.css-m7lhwd .css-1x5jdmq'), true)
		this.search = new Button('Find a Location', this.page.locator('.css-m7lhwd .css-npj6et'), true)
		this.breadcrumbs = new Label('Breadcrumbs', this.page.locator('.css-15efrom'), true)
		this.map = new Label('Map', this.page.locator('#driven-google-maps'), true)
		this.h2 = new Label('View By State', this.page.locator('h2.css-gmk71c'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
