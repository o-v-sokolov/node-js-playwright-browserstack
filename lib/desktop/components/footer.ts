import { Locator } from '@playwright/test'
import { Label } from '@lib//elements/label'
import { Button } from '@lib//elements/button'
import { BaseComponent } from '@lib//elements/base_component'

export class Footer extends BaseComponent {
	findNow: Label
	findLocation2: Button
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
	careersL: Label
	careers: Button
	help: Label
	findLocation: Button
	noHassleWarranty: Button
	covid19: Button
	contactUs: Button
	mobileTerms: Button
	connectWithUs: Label
	facebook: Label
	instagram: Label
	youtube: Label
	twitter: Label
	copyRights: Label
	webAccessibility: Label
	termsConditions: Label
	privacyCenter: Label
	sitemap: Label

	constructor(container: Locator) {
		super('Footer', container, true)

		this.findNow = new Label('Auto Glass Servicing', this.page.locator('h3 >> text="Find Your Local Auto Glass Now!"'), true)
		this.findLocation2 = new Button('Find a location', this.page.locator('.css-182s9va'), true)
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

		this.careersL = new Label('Careers', this.container.locator('#Careers-header'), true)
		this.careers = new Button('Careers link', this.container.locator('.css-5cdnxl >> text="Careers"'), true)

		this.help = new Label('Help', this.container.locator('text="Help"'), true)
		this.findLocation = new Button('Find A Location link', this.container.locator('text="Find A Location"'), true)
		this.noHassleWarranty = new Button('No Hassle Warranty link', this.container.locator('text="No Hassle Warranty"'), true)
		this.covid19 = new Button('Covid-19 And Your Safety link', this.container.locator('text="Covid-19 And Your Safety"'), true)
		this.contactUs = new Button('Contact Us link', this.container.locator('text="Contact Us"'), true)
		this.mobileTerms = new Button('Mobile Terms link', this.container.locator('text="Mobile Terms"'), true)

		this.connectWithUs = new Label('Connect with Us', this.container.locator('text="Connect with Us"'), true)
		this.facebook = new Label('Connect with Us', this.container.locator('[title="External link to https://www.facebook.com/AutoGlassNowLLC"]'), true)
		this.instagram = new Label('Connect with Us', this.container.locator('[title="External link to https://www.instagram.com/autoglassnow/"]'), true)
		this.youtube = new Label('Connect with Us', this.container.locator('[title="External link to https://www.youtube.com/c/AutoGlassNow"]'), true)
		this.twitter = new Label('Connect with Us', this.container.locator('[title="External link to https://twitter.com/autoglassnow"]'), true)

		this.copyRights = new Label('Auto Glass Now, All Rights Reserved', this.container.locator('.css-wy1hlp'), true)
		this.webAccessibility = new Label('Web Accessibility', this.container.locator('[title="Link to /web-accessibility/"]'), true)
		this.termsConditions = new Label('Terms & Conditions', this.container.locator('[title="Link to /terms-of-use/"]'), true)
		this.privacyCenter = new Label('Privacy Center', this.container.locator('[title="Link to /privacy-policy/"]'), true)
		this.sitemap = new Label('Sitemap', this.container.locator('[title="Link to /sitemap/"]'), true)
	}
}
