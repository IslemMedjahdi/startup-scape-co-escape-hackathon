import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { AuthOptions } from 'next-auth';
import { UserRepository } from '../../database/user-repository';

export const nextauthOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            credentials: {
                email: {
                    label: 'E-mail',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                },
            },
            async authorize(credentials) {
                const email = credentials?.email.toLowerCase();

                if (!email) throw new Error('Email is required.');

                const user = await UserRepository.findByEmail(email);

                if (!user) {
                    throw new Error('User does not exist.');
                }

                const passwordIsValid = await bcrypt.compare(credentials?.password!, user.password);

                if (!passwordIsValid) {
                    throw new Error('Invalid credentials');
                }

                return {
                    ...user,
                };
            },
        }),
    ],
    session: {
        strategy: 'jwt',
    },
    pages: {
        signIn: '/auth/login',
    },
};
