import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import LoginForm from './LoginForm';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
    title: 'STARTUP SCAPE | Login',
};

const LoginPage = async () => {
    const session = await getServerSession();

    if (session) {
        redirect('/');
    }

    return (
        <div className="h-screen">
            <LoginForm />
        </div>
    );
};

export default LoginPage;
