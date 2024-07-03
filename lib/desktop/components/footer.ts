import { Locator } from '@playwright/test'
import { Label } from '@lib//elements/label'
import { Button } from '@lib//elements/button'
import { BaseComponent } from '@lib//elements/base_component'

export class Footer extends BaseComponent {
	autoGlassServices: Label
	autoGlass: Button
	windshieldRepair: Button
	windshieldReplacement: Button
	carWindow: Button
	insurance: Button
	company: Label
	aboutUs: Button
	buyNowPayLater: Button
	fleetCommercial: Button
	blog: Button
	careers: Label
	careersL: Button
	help: Label
	findLocation: Button
	noHassleWarranty: Button
	covid19: Button
	contactUs: Button
	mobileTerms: Button

	constructor(container: Locator) {
		super('Footer', container, true)

		this.autoGlassServices = new Label('Auto Glass Services', this.container.locator('text="Auto Glass Services"'), true)
		this.autoGlass = new Button('Auto Glass & Calibration link', this.container.locator('text="Auto Glass & Calibration"'), true)
		this.windshieldRepair = new Button('Windshield Repair link', this.container.locator('text="Windshield Repair"'), true)
		this.windshieldReplacement = new Button('Windshield Replacement link', this.container.locator('text="Windshield Replacement"'), true)
		this.carWindow = new Button('Car Window & Rear Window Windshield Replacement link', this.container.locator('text="Car Window & Rear Window Windshield Replacement"'), true)
		this.insurance = new Button('Insurance Claims Management link', this.container.locator('text="Insurance Claims Management"'), true)

		this.company = new Label('Company', this.container.locator('text="Company"'), true)
		this.aboutUs = new Button('About Us link', this.container.locator('text="About Us"'), true)
		this.buyNowPayLater = new Button('Buy Now, Pay Later link', this.container.locator('text="Buy Now, Pay Later"'), true)
		this.fleetCommercial = new Button('Fleet & Commercial link', this.container.locator('text="Fleet & Commercial"'), true)
		this.blog = new Button('Blog link', this.container.locator('text="Blog"'), true)

		this.careers = new Label('Careers', this.container.locator('#Careers-header'), true)
		this.careersL = new Button('Careers link', this.container.locator('.css-5cdnxl >> text="Careers"'), true)

		this.help = new Label('Help', this.container.locator('text="Help"'), true)
		this.findLocation = new Button('Find A Location link', this.container.locator('text="Find A Location"'), true)
		this.noHassleWarranty = new Button('No Hassle Warranty link', this.container.locator('text="No Hassle Warranty"'), true)
		this.covid19 = new Button('Covid-19 And Your Safety link', this.container.locator('text="Covid-19 And Your Safety"'), true)
		this.contactUs = new Button('Contact Us link', this.container.locator('text="Contact Us"'), true)
		this.mobileTerms = new Button('Mobile Terms link', this.container.locator('text="Mobile Terms"'), true)
	}
}
