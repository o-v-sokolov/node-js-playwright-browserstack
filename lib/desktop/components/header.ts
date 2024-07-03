import { Locator } from '@playwright/test'
import { Label } from '@lib//elements/label'
import { Button } from '@lib//elements/button'
import { BaseComponent } from '@lib//elements/base_component'

export class Header extends BaseComponent {
	locations: Button
	careers: Button
	agentPortal: Button
	logo: Label
	getQuote: Button
	tel: Button
	quote: Label

	constructor(container: Locator) {
		super('Header', container, true)

		this.locations = new Button('Locations link', this.container.locator('.css-owi57n >> text="Locations"'), true)
		this.careers = new Button('Careers link', this.container.locator('.css-owi57n >> text="Careers"'), true)
		this.agentPortal = new Button('Agent Portal link', this.container.locator('.css-owi57n >> text="Agent Portal"'), true)

		this.logo = new Label('Main Logo', this.container.locator('.active-link .gatsby-image-wrapper picture > img'), true)
		this.getQuote = new Button('GET A QUOTE', this.container.locator('.css-1o7rntn .css-z8rrs9'), true)
		this.tel = new Button('Tel', this.container.locator('.css-2b4cxw'), true)
		this.quote = new Label('Quote', this.container.locator('.css-hqtv41'), true)
	}
}
