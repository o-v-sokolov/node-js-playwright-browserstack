import { Base } from '@lib/common/base'
import { BrowserContext, Page } from '@playwright/test'

export class BasePage extends Base {
	page: Page
	pageName: string
	pageUrl: string

	constructor(page: Page, pageName: string, pageUrl = '') {
		super(pageName)

		this.page = page
		this.pageName = pageName
		this.pageUrl = pageUrl
	}

	getCurrentUrl(): string {
		return this.page.url()
	}

	context(): BrowserContext {
		return this.page.context()
	}

	waitLoaded(): Promise<unknown>[] {
		return [this.waitForLoadState('load'), this.page.waitForRequest('**/*AGN*.png*')]
	}

	async open(url = this.pageUrl): Promise<void> {
		this.logger.info(`Navigate to "${process.env.BASE_URL + url}"`)
		await Promise.all([...this.waitLoaded(), this.page.goto(process.env.BASE_URL + url)])
	}

	async reload(): Promise<void> {
		this.logger.info('Reload page')
		await Promise.all([...this.waitLoaded(), this.page.reload()])
	}

	async goBack(): Promise<void> {
		this.logger.info('Go back on page')
		await Promise.all([...this.waitLoaded(), this.page.goBack()])
	}

	async waitForTimeout(timeout = 5_000): Promise<void> {
		this.logger.info(`Wait for timeout - ${timeout} ms`)
		await this.page.waitForTimeout(timeout)
	}

	async close(): Promise<void> {
		this.logger.info('Close page')
		await this.page.close()
	}

	async waitForLoadState(
		state: 'load' | 'domcontentloaded' | 'networkidle' | undefined = 'load',
		timeout = 30_000
	): Promise<void> {
		this.logger.info(`Wait for ${state} state on page`)
		await this.page.waitForLoadState(state, { timeout })
	}
}
