import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt"
    },
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
                email: { label: "Email", type: "email" },
            },
            async authorize(credentials, req) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                // You can also use the `req` object to obtain additional parameters
                // (i.e., the request IP address)
                console.log('CRE: ', credentials)

                /*  const res = await fetch("/your/endpoint", {
                     method: 'POST',
                     body: JSON.stringify(credentials),
                     headers: { "Content-Type": "application/json" }
                 })
                 const user = await res.json()
 
                 // If no error and we have user data, return it
                 if (res.ok && user) {
                     return user
                 }
                 // Return null if user data could not be retrieved
                 return null */

                const { email, password } = credentials;

                if (email) {
                    const currentUser = users.find(u => u?.email === email)
                    if (currentUser) {
                        if (currentUser?.password === password) {
                            return currentUser;
                        } else {
                            return null
                        }
                    }
                }

                if (!credentials) {
                    return null;
                } else {
                    return true;
                }


            }
        })
    ]
})

const users = [
    { email: 'm@gmail.com', password: 'password' }
]


export { handler as GET, handler as POST };