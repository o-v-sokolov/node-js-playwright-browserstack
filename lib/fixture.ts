/* eslint-disable no-empty-pattern */
import UserDataHelper from '@lib/helpers/user_data_helper'
import { Page, test as base, expect as baseExpect, devices } from '@playwright/test'

type MyFixtures = {
	page: Page
	userDataHelper: UserDataHelper
}

export const expect = baseExpect.extend({
	async toBeOk(received: unknown, customErrorMessage?: string) {
		function hasComponentIsOkMethod(obj: unknown): obj is { isOk(): Promise<boolean> } {
			return obj !== null && typeof obj === 'object' && 'isOk' in obj && typeof obj.isOk === 'function'
		}

		function hasComponentIsNameProperty(obj: unknown): obj is { name: string } {
			return obj !== null && typeof obj === 'object' && 'name' in obj && typeof obj.name === 'string'
		}

		function hasComponentPageNameProperty(obj: unknown): obj is { pageName: string } {
			return obj !== null && typeof obj === 'object' && 'pageName' in obj && typeof obj.pageName === 'string'
		}

		let componentName = ''
		const isOkPresent = hasComponentIsOkMethod(received)

		if (isOkPresent) {
			const isOkResult = await received.isOk()

			if (isOkResult) {
				return {
					message: () => 'passed',
					pass: true
				}
			}

			if (hasComponentIsNameProperty(received)) {
				componentName = received.name
			}

			if (hasComponentPageNameProperty(received)) {
				componentName = received.pageName
			}

			if (componentName) {
				return {
					message: () =>
						customErrorMessage ||
						`Assertion toBeOk() failed.\nComponent "${componentName}" is not OK.\nComponent has some not visible elements\n`,
					pass: false
				}
			}

			return {
				message: () => customErrorMessage || 'Assertion toBeOk() failed.\nComponent has some not visible elements\n',
				pass: false
			}
		} else {
			return {
				message: () => 'Assertion toBeOk() failed.\nReceived component hot have isOK() method\n',
				pass: false
			}
		}
	}
})

export const setDesktopGoogleBotView = () =>
	base.use({
		userAgent:
			'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; Googlebot/2.1; +http://www.google.com/bot.html) Chrome/123.0.0.0 Safari/537.36'
	})

export const setMobileGoogleBotView = () =>
	base.use({
		userAgent:
			'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
	})

export const test = base.extend<MyFixtures>({
	page: async ({ page }, use) => {
		await use(page)
	},
	userDataHelper: async ({}, use) => {
		await use(new UserDataHelper())
	},

})
