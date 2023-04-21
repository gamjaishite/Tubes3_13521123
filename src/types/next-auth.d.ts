import NextAuth from 'next-auth'

declare module "next-auth" {
    interface Session {
        user: {
            email: string;
            role: string;
        }
    }

    interface User {
        id?: string;
        email?: string;
        role: string;
    }
}