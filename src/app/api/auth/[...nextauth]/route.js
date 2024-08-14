
import User from "@/models/User";
import { connectToDB } from "@/utils/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcryt from "bcryptjs"
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await connectToDB();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        console.log("user func runded.")
                        const isPasswordCorrect = await bcryt.compare(credentials.password, user.password)
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                    return null;
                } catch (error) {
                    console.log("error", error)
                    throw new Error(error)
                }
            }
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
            }
            return token;

        },
        async session({ session, token }) {
            if (session) {
                session.user.role = token.role;
            }
            return session;
        },
        async signIn(user, account) {
            if (user?.account?.type == "credentials") {
                return true;
            }
        },

    },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }