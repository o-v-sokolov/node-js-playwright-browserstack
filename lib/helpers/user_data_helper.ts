import { fakerEN_US as faker } from '@faker-js/faker'

export default class UserDataHelper {
	public getRandomEmail() {
		return faker.internet.email()
	}

	public getRandomFirstName() {
		return faker.person.firstName()
	}

	public getRandomLastName() {
		return faker.person.lastName()
	}

	public getRandomPhoneNumber() {
		return '777' + faker.string.numeric({ length: 7, allowLeadingZeros: false })
	}
}
