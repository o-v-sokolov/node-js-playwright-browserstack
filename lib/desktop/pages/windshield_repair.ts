import { Page } from '@playwright/test'
import { BaseDesktopPage } from '@lib/desktop/pages/base_desktop_page'
import { Label } from '@lib/elements/label'
import { Button } from '@lib/elements/button'
import { AdditionalAutoGlassServices } from '../components/additional_auto_glass_services'

export class WindshieldRepair extends BaseDesktopPage {
	h1: Label
	description: Label
	whenShouldMyWindshieldBeRepaired: Label
	text: Label
	list: Label
	needRepair: Label
	whyRepairStoneChipsSmallCracks: Label
	saveMoney: Label
	fastSimple: Label
	retainIntegrity: Label
	ourMobileService: Label
	learnMore: Button
	DoYouNeed: Label
	findLocation: Button
	haveRV: Label
	additionalAutoGlassServices: AdditionalAutoGlassServices

	constructor(page: Page) {
		super(page, 'Fast Windshield Chip & Crack Repair', '/auto-glass-services/windshield-repair/')

		this.h1 = new Label('H1', this.page.locator('h1'), true)
		this.description = new Label('Description', this.page.locator('.css-m7lhwd .css-qrxt0m'), true)
		this.whenShouldMyWindshieldBeRepaired = new Label('When Should My Windshield Be Repaired?', this.page.locator('.css-bf08z h2'), true)
		this.text = new Label('Text', this.page.locator('.css-1knjxg1 .css-qrxt0m'), true)
		this.list = new Label('List', this.page.locator('.css-iieg7b'), true)
		this.needRepair = new Label('Need a repair?', this.page.locator('.css-1hy2q6x'), true)
		this.whyRepairStoneChipsSmallCracks = new Label('Why Repair Stone Chips & Small Cracks?', this.page.locator('.css-15m7qfy h2'), true)
		this.saveMoney = new Label('Save Money', this.page.locator('.css-10knp99 >> text="Save Money"'), true)
		this.fastSimple = new Label('Fast & Simple', this.page.locator('.css-10knp99 >> text="Fast & Simple"'), true)
		this.retainIntegrity = new Label('Retain Integrity', this.page.locator('.css-10knp99 >> text="Retain Integrity"'), true)
		this.ourMobileService = new Label('Our Mobile Service Will Come To You Quickly!', this.page.locator('h2 >> text="Our Mobile Service Will Come To You Quickly!"'), true)
		this.learnMore = new Button('Learn More', this.page.locator('.css-6lzzp6 .css-wd0exg >> text="Learn More"'), true)
		this.DoYouNeed = new Label('Do You Need New Windshield Wipers?', this.page.locator('h2 >> text="Our Mobile Service Will Come To You Quickly!"'), true)
		this.findLocation = new Button('Find A Location', this.page.locator('.css-6lzzp6 .css-wd0exg >> text="Find A Location"').nth(0), true)
		this.haveRV = new Label('Have an RV or Motorhome With a Chip or Crack?', this.page.locator('h2 >> text="Have an RV or Motorhome With a Chip or Crack?"'), true)
		this.findLocation = new Button('Find A Location', this.page.locator('.css-6lzzp6 .css-wd0exg >> text="Find A Location"').nth(1), true)
		this.additionalAutoGlassServices = new AdditionalAutoGlassServices(this.page.locator('.css-17ygmjm .css-wlwua9 h2'))
	}

	async isOk() {
		if (!(await super.isOk())) return false

		this.logger.info('Is OK')
		return true
	}
}
