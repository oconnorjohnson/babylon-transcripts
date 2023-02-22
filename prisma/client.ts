import { PrismaClient } from "@prisma/client" 


// Use `declare global` syntax to add properties to global scope 
declare global {
    var prisma: PrismaClient | undefined 
}

const client = globalThis.prisma || new PrismaClient() 
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client 

// client.user.findMany() // works