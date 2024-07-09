import { Locator } from '@playwright/test'
import { Label } from '@lib//elements/label'
import { Button } from '@lib//elements/button'
import { BaseComponent } from '@lib//elements/base_component'

export class AdditionalAutoGlassServices extends BaseComponent {
	windshieldReplacement: Button
	carWindow: Button
	mobileAutoRepairService: Button

	constructor(container: Locator) {
		super('Additional Auto Glass Services', container, true)

		this.windshieldReplacement = new Button('Windshield Replacement', this.page.locator('.css-1x1a9kx >> text="Windshield Replacement"'), true)
		this.carWindow = new Button('Car Window & Rear Windshield Replacement', this.page.locator('.css-1x1a9kx >> text="Car Window & Rear Windshield Replacement"'), true)
		this.mobileAutoRepairService = new Button('Mobile Auto Repair Service', this.page.locator('.css-1x1a9kx >> text="Mobile Auto Repair Service"'), true)
	}
}
