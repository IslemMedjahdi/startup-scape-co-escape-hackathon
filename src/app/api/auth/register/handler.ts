import { RegisterRequest } from './request';
import { RegisterResponse } from './response';

const handler = async (request: RegisterRequest): Promise<RegisterResponse> => {
    return {
        success: true,
    };
};

export { handler };
