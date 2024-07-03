import { Locator } from '@playwright/test'
import { BaseComponent } from './base_component'

export class Label extends BaseComponent {
	constructor(name: string, container: Locator, isCheckable = false) {
		super(name, container, isCheckable)
	}
}
