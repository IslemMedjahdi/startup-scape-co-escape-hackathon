import { NextRequest } from 'next/server';

interface RegisterRequest {}

interface RegisterResponse {
    success: true;
}

const POST = (req: Request) => {
    return Response.json({ test: true });
};

export { POST };
