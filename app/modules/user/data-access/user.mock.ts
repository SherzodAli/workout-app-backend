import { faker } from '@faker-js/faker'

function getFakeFullName(): string {
	return faker.person.fullName()
}

export { getFakeFullName }
