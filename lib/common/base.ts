import { LoggerController } from '@lib/common/logger.controller'

export abstract class Base {
	logger: LoggerController
	protected readonly activityName: string

	protected constructor(activityName: string) {
		this.activityName = activityName
		this.logger = new LoggerController(`[${this.activityName}]`)
	}
}
