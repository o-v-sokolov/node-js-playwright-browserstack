import { Locator } from '@playwright/test'
import { BaseComponent } from './base_component'

export class Checkbox extends BaseComponent {
	constructor(name: string, container: Locator, isCheckable = false) {
		super(name, container, isCheckable)
	}

	async check(attribute = 'class', attributeValue = 'selected'): Promise<void> {
		this.logger.info('Check checkbox')
		if (await this.isUnchecked(attribute, attributeValue)) {
			await this.click()
		}
	}

	async uncheck(attribute = 'class', attributeValue = 'selected'): Promise<void> {
		this.logger.info('Uncheck checkbox')
		if (await this.isChecked(attribute, attributeValue)) {
			await this.click()
		}
	}

	async isChecked(attribute = 'class', attributeValue = 'selected'): Promise<boolean> {
		this.logger.info('Verify that the checkbox is selected')
		const stateAttr = await this.container.getAttribute(attribute)
		if (stateAttr) {
			return stateAttr.includes(attributeValue)
		}
		this.logger.info('Is NOT selected')
		return false
	}

	async isUnchecked(attribute = 'class', attributeValue = 'selected'): Promise<boolean> {
		this.logger.info('Verify that the checkbox is not selected')
		const stateAttr = await this.container.getAttribute(attribute)
		if (stateAttr) {
			return !stateAttr.includes(attributeValue)
		}
		this.logger.info('Is NOT selected')
		return true
	}
}
