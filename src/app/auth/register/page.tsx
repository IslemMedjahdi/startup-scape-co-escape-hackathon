import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import React from 'react';
import RegisterForm from './RegisterForm';

const RegisterPage = async () => {
    const session = await getServerSession();

    if (session) {
        redirect('/');
    }

    return <RegisterForm />;
};

export default RegisterPage;
