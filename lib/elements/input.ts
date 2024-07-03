import { Locator } from '@playwright/test'
import { BaseComponent } from './base_component'

export class Input extends BaseComponent {
	constructor(name: string, container: Locator, isCheckable = false) {
		super(name, container, isCheckable)
	}

	async fill(valueText: string): Promise<void> {
		this.logger.info(`Fill with value "${valueText}"`)
		await this.container.fill(valueText)
	}

	async type(valueText: string): Promise<void> {
		this.logger.info(`Type with value ${valueText}`)
		await this.container.pressSequentially(valueText, { delay: 250 })
	}

	async getValue(): Promise<string> {
		this.logger.info('Get value')
		const value = await this.container.inputValue()
		const valueAsAttribute = await this.container.getAttribute('value')
		this.logger.info(`Value is ${value ?? valueAsAttribute}`)
		return value ?? valueAsAttribute
	}

	async getPlaceholder(): Promise<string | null> {
		this.logger.info('Get placeholder')
		return this.container.getAttribute('placeholder')
	}

	async clear(): Promise<void> {
		this.logger.info('Clear input')
		await this.container.clear()
	}
}
