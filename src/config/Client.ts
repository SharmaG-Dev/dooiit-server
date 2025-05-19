import { PrismaClient } from '@prisma/client'


export const client = new PrismaClient({
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
})

