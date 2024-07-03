import { Locator } from '@playwright/test'
import { BaseComponent } from './base_component'

export class Dropdown extends BaseComponent {
	constructor(name: string, container: Locator, isCheckable = false) {
		super(name, container, isCheckable)
	}

	async selectOption(value: string): Promise<void> {
		this.logger.info(`Select option ${value} in ${this.name}.`)

		await this.container.selectOption(value)
	}
}
