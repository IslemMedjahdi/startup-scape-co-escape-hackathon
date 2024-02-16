import { MongoDB } from './database/mongodb';

const controllerWrapper = async <T extends Record<string, any>>(
    controller: () => Promise<T>,
): Promise<Response> => {
    try {
        await MongoDB.connect();

        return Response.json(await controller());
    } catch (e) {
        if (e instanceof Error) {
            return Response.json({ error: e.message });
        }

        return Response.json({ error: 'Unkonwn Error' });
    }
};

export { controllerWrapper };
