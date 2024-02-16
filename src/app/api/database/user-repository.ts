import { UserModel } from './models/UserModel';
import { MongoDB } from './mongodb';

export const UserRepository = {
    async create(user: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: string;
    }): Promise<void> {
        try {
            await UserModel.create({
                ...user,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
        }
    },

    async findByEmail(email: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    } | null> {
        try {
            await MongoDB.connect();
            const user = await UserModel.findOne({
                email,
            });

            if (!user) return null;

            return {
                id: user._id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            };
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            return null;
        }
    },
    async findById(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    } | null> {
        try {
            await MongoDB.connect();

            const user = await UserModel.findById(id);

            if (!user) return null;

            return {
                id: user._id.toString(),
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                role: user.role,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            };
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            return null;
        }
    },
};
