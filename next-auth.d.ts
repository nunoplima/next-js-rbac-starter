import { DefaultSession, DefaultUser } from 'next-auth'
import { DefaultJWT } from 'next-auth/jwt'
import { ERole } from './enums'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's role. */
      role: ERole
    } & DefaultSession['user']
  }

  interface User extends DefaultUser {
    role: ERole
  }
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    role: ERole
  }
}

declare module '@auth/core/adapters' {
  interface AdapterUser extends DefaultUser {
    role: ERole
  }
}
