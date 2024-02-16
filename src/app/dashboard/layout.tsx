import React from 'react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

import SideBar from './components/SideBar';

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
    const session = await getServerSession();

    if (!session) {
        redirect(`/dashboard/auth/login?callbackUrl=/dashboard`);
    }

    const layout = cookies().get('react-resizable-panels:layout');
    const collapsed = cookies().get('react-resizable-panels:collapsed');

    const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
    const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

    return (
        <SideBar
            navCollapsedSize={4}
            defaultLayout={defaultLayout}
            defaultCollapsed={defaultCollapsed}
        >
            <div className="min-h-screen h-screen">{children}</div>
        </SideBar>
    );
};

export default AdminLayout;
