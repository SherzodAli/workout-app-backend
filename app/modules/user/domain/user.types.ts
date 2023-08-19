const userFields = {
	id: true,
	name: true,
	email: true,
	images: true,
	createdAt: true,
	updatedAt: true
}

interface IUser {
	id: number
	password?: string
	name: string
	email: string
	images: string[]
	createdAt: Date
	updatedAt: Date
}

interface ICreateUser {
	email: string
	password: string
	name: string
}

export { userFields, IUser, ICreateUser }
