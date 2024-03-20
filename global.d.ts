import { PrismaClient } from '@prisma/client'

declare global {
	// eslint-disable-next-line no-unused-vars
	var prisma: undefined | PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
}
