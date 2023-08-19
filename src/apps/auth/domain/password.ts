import { hash, verify } from 'argon2'

async function getHashedPassword(password: string): Promise<string> {
	return await hash(password)
}

async function doesPasswordMatch(
	hash: string,
	password: string
): Promise<boolean> {
	return await verify(hash, password)
}

export { getHashedPassword, doesPasswordMatch }
