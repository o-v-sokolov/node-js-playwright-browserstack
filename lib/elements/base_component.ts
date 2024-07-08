import { Base } from '@lib/common/base'
import { Locator, Page } from '@playwright/test'

export class BaseComponent extends Base {
	page: Page
	name: string
	container: Locator
	isCheckable: boolean

	constructor(name: string, container: Locator, isCheckable = false) {
		super(name)

		this.name = name
		this.container = container
		this.page = container.page()
		this.isCheckable = isCheckable
	}

	private hasComponentIsOkMethod(obj: unknown): obj is { isOk(): Promise<boolean> } {
		return obj !== null && typeof obj === 'object' && 'isOk' in obj && typeof obj.isOk === 'function'
	}

	private componentIsCheckable(obj: unknown): obj is { isCheckable: boolean } {
		return obj !== null && typeof obj === 'object' && 'isCheckable' in obj && obj.isCheckable === true
	}

	async isVisible(): Promise<boolean> {
		if (await this.container.isHidden()) {
			this.logger.warn('Is not visible')
			return false
		}

		this.logger.info('Is visible')
		return true
	}

	async isNotVisible(): Promise<boolean> {
		if (await this.container.isHidden()) {
			this.logger.info('Is not visible')
			return true
		}

		this.logger.warn('Is visible')
		return false
	}

	async waitForBeVisible(timeout = 40_000): Promise<void> {
		this.logger.info('Wait for be visible')
		await this.container.waitFor({ state: 'visible', timeout })
	}

	async waitForBeHidden(timeout = 40_000): Promise<void> {
		this.logger.info('Wait for be hidden')
		await this.container.waitFor({ state: 'hidden', timeout })
	}

	async isEnabled(attribute = 'class', attributeValue = 'disabled'): Promise<boolean> {
		const attributeContent = await this.container.getAttribute(attribute)
		const disabled = attributeContent ? attributeContent.includes(attributeValue) : false

		if (disabled || (await this.container.isDisabled())) {
			this.logger.warn('Is not enabled')
			return false
		}

		this.logger.info('Is enabled')
		return true
	}

	async isDisabled(attribute = 'class', attributeValue = 'disabled'): Promise<boolean> {
		const attributeContent = await this.container.getAttribute(attribute)
		const disabled = attributeContent ? attributeContent.includes(attributeValue) : false

		if (!disabled || !(await this.container.isDisabled())) {
			this.logger.warn('Is enabled')
			return false
		}

		this.logger.info('Is not enabled')
		return true
	}

	async isOk(): Promise<boolean> {
		if (!(await this.isVisible())) {
			this.logger.error('is NOT OK')
			return false
		}

		for (const component in this) {
			const property = this[component]
			if (this.hasComponentIsOkMethod(property) && this.componentIsCheckable(property)) {
				if (!(await property.isOk())) {
					return false
				}
			}
		}

		return true
	}

	async click(options?: { force?: boolean }) {
		this.logger.info('Click')
		await this.container.click(options)
	}

	async scrollIntoViewIfNeeded(timeout = 0) {
		this.logger.info('Scroll to')
		await this.container.scrollIntoViewIfNeeded({ timeout })
	}

	async clickToNavigate(state: 'load' | 'domcontentloaded' | 'networkidle' | 'commit' = 'load') {
		this.logger.info('Click and navigate to another page')
		await Promise.all([this.page.waitForNavigation({ waitUntil: state }), this.container.click()])
	}

	async hover(timeout: number = 500) {
		this.logger.info('Hover')
		await this.container.hover()
		await this.page.waitForTimeout(timeout)
	}

	async getText() {
		this.logger.info('Get text')
		const text = (await this.container.innerText()).trim()
		this.logger.info(`Text: ${text}`)
		return text
	}

	async isActive(attribute = 'class', attributeValue = 'active') {
		const attributeContent = await this.container.getAttribute(attribute)
		const isActive = attributeContent ? attributeContent.includes(attributeValue) : false

		if (!isActive) {
			this.logger.warn('Is not active')
			return false
		}

		this.logger.info('Is active')
		return true
	}

	async getAttribute(attribute: string) {
		this.logger.info('Get attribute')
		return this.container.getAttribute(attribute)
	}

	async count() {
		this.logger.info(`Get count element "${this.name}".`)
		return this.container.count()
	}

	async waitForTimeout(timeout = 1_000): Promise<void> {
		this.logger.info(`Wait for timeout - ${timeout} ms`)
		await this.page.waitForTimeout(timeout)
	}
}
