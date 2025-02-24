import NextAuth from "next-auth"

const handler = NextAuth({
    session: {
        strategy: "jwt"
    },
    providers: [

    ]
})