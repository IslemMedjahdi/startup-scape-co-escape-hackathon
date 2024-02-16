import { handler } from './handler';
import { RegisterRequest } from './request';

const POST = async (req: Request) => {
    return Response.json(await handler(req.body as RegisterRequest));
};

export { POST };
