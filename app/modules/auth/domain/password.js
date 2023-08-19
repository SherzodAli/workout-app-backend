import { hash, verify } from 'argon2'

async function getHashedPassword(password) {
	return await hash(password)
}

async function doesPasswordMatch(hash, password) {
	return await verify(hash, password)
}

export { getHashedPassword, doesPasswordMatch }
