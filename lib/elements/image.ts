import { Locator } from '@playwright/test'
import { BaseComponent } from './base_component'

export class Image extends BaseComponent {
	constructor(name: string, container: Locator, isCheckable = false) {
		super(name, container, isCheckable)
	}

	async getSourceLink(): Promise<string | null> {
		this.logger.info('Get source link')
		const link = await this.container.getAttribute('src')

		if (!link) {
			this.logger.error("Source link is empty or doesn't exist")
		}

		this.logger.info(`Source link: ${link}`)
		return link
	}
}
