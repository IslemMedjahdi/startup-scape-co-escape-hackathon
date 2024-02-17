import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import SideBar from './components/SideBar';

import ProccessingGuySvg from '@/../public/images/process.svg';
import Image from 'next/image';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession();

    if (!session) {
        redirect(`/auth/login?callbackUrl=/`);
    }

    const layout = cookies().get('react-resizable-panels:layout');
    const collapsed = cookies().get('react-resizable-panels:collapsed');

    const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
    const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

    const isCollectingData = false;

    return (
        <SideBar
            navCollapsedSize={4}
            defaultLayout={defaultLayout}
            defaultCollapsed={defaultCollapsed}
        >
            {isCollectingData ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="flex flex-col max-w-screen-sm gap-8">
                        <p className="font-medium text-xl text-center">
                            We are collecting your data and preparing the dashboard for you. This
                            will take a few days. Please be patient. You will be notified by email
                            once the dashboard is ready.
                        </p>
                        <div className="h-48">
                            <Image
                                src={ProccessingGuySvg}
                                alt="processing"
                                className="h-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="min-h-screen h-screen p-4 overflow-auto">{children}</div>
            )}
        </SideBar>
    );
};

export default AdminLayout;
