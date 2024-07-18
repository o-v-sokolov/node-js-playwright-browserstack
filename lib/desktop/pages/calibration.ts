import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'

export class Calibration extends BaseDesktopPage {
	h1: Label
	description: Label
	text: Label
	whatIsAdvancedDriver: Label
	howDoesCalibration: Label
	whatAreTheTypes: Label
	typesOfCalibration: Label
	findLocation: Button


	constructor(page: Page) {
		super(page, 'ADAS Windshield Camera Calibration', '/calibration/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.whatIsAdvancedDriver = new Label('What Is Advanced Driver Assistance Systems (ADAS) Windshield Camera Calibration?', this.page.locator('h2.css-jljdlw').nth(0), true)
		this.text = new Label('Text', this.page.locator('.css-f7nqr1 .css-qrxt0m'), true)

		this.whatAreTheTypes = new Label('What Are The Types Of ADAS Systems?', this.page.locator('h2.css-5ijt88').nth(0), true)
		this.typesOfCalibration = new Label('Types Of Calibration', this.page.locator('h2.css-5ijt88').nth(1), true)

		this.howDoesCalibration = new Label('How Does Calibration Affect My Windshield Servicing?', this.page.locator('h2.css-jljdlw').nth(0), true)
		this.findLocation = new Button('Find A Location', this.page.locator('.css-6lzzp6 [title="Link to /our-locations/"] >> text="Find A Location"'), true)
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
