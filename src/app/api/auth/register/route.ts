import { controllerWrapper } from '../../controller-wrapper';
import { handler } from './handler';

const POST = async (req: Request) => {
    return await controllerWrapper(async () => await handler(await req.json()));
};

export { POST };
