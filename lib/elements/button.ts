import { Locator } from '@playwright/test'
import { BaseComponent } from './base_component'

export class Button extends BaseComponent {
	constructor(name: string, container: Locator, isCheckable = false) {
		super(name, container, isCheckable)
	}
}
