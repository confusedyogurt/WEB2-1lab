import { NextAuthOptions, User, getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { PrismaClient, user } from '@prisma/client';
const prisma = new PrismaClient();

export const authConfig: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Sign in",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password)
                    return null;

                const dbUser = await prisma.user.findFirst({
                    where: { email: credentials.email },
                });

                if (dbUser && dbUser.password === credentials.password) {
                    const { password, id, ...dbUserWithoutPassword } = dbUser;
                    return dbUserWithoutPassword as User;
                }

                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
};

export async function loginIsRequiredServer() {
    const session = await getServerSession(authConfig);
    if (!session) return redirect("/");
}

export function loginIsRequiredClient() {
    if (typeof window !== "undefined") {
        const session = useSession();
        const router = useRouter();
        if (!session) router.push("/");
    }
}


export function isLoggedIn() {
    const session = useSession()
    if (!session) return false
    return true
}