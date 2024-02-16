import mongoose from 'mongoose';

import { UserRepository } from './user-repository';
import bcrypt from 'bcrypt';

let connection: typeof mongoose | undefined;

const MONGODB_URI = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const MongoDB = {
    async connect(): Promise<void> {
        if (connection) return;

        // add a new Admin if there is no Admin in the database
        const email = process.env.DEFAULT_ADMIN_EMAIL || '';
        const password = process.env.DEFAULT_ADMIN_PASSWORD || '';

        if (!email || !password)
            throw new Error(
                'Please define the DEFAULT_ADMIN_EMAIL and DEFAULT_ADMIN_PASSWORD environment variables inside .env.local',
            );

        connection = await mongoose.connect(MONGODB_URI);

        const isExists = Boolean(await UserRepository.findByEmail(email));

        const hashedPassword = await bcrypt.hash(password, 10);

        if (!isExists) {
            try {
                await UserRepository.create({
                    email,
                    password: hashedPassword,
                    role: 'admin',
                    firstName: 'Admin',
                    lastName: 'Admin',
                });
            } catch (error) {
                if (error instanceof Error) {
                    throw new Error('Error creating admin -> ' + error.message);
                }
            }
        }
    },

    async disconnect(): Promise<void> {
        if (!connection) return;

        await connection.disconnect();

        connection = undefined;
    },

    async clear(): Promise<void> {
        if (!connection) return;

        await connection.connection.db.dropDatabase();
    },
};

export { MongoDB };
