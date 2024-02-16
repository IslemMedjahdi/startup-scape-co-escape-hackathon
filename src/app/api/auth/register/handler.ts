import bcrypt from 'bcrypt';
import * as crypto from 'crypto';

import { RegisterRequest } from './request';
import { RegisterResponse } from './response';

import { UserModel } from '../../database/models/UserModel';
import { FounderModel } from '../../database/models/FounderModel';

import { UserRepository } from '../../database/user-repository';

const handler = async (request: RegisterRequest): Promise<RegisterResponse> => {
    const { password, ...rest } = request;

    const emailUsed = await UserModel.exists({ email: rest.email });

    if (emailUsed) throw new Error('email already used');

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserRepository.create({
        email: rest.email,
        password: hashedPassword,
        role: 'founder',
        firstName: 'Founder',
        lastName: 'Founder',
    });

    const id = crypto.randomUUID();

    await FounderModel.create({
        ...rest,
        id,
        createdAt: new Date(),
        updatedAt: new Date(),
    });

    return { id };
};

export { handler };
