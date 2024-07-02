import { getLogger } from 'log4js'
import { Logger as log4js } from 'log4js'

export class LoggerController {
	private log4js: log4js
	private category: string

	constructor(category: string) {
		this.category = category
		this.log4js = getLogger(this.category)
		this.log4js.level = 'trace'
	}

	info(message: string, ...args: unknown[]): void {
		this.log4js.info(message, ...args)
	}

	error(message: string, ...args: unknown[]): void {
		this.log4js.error(message, ...args)
	}

	warn(message: string, ...args: unknown[]): void {
		this.log4js.warn(message, ...args)
	}
}
