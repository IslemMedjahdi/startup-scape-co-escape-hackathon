'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Building, Home, LogOutIcon, Settings } from 'lucide-react';

import { cn } from '@/lib/utils';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Nav from './Nav';

import LOGO from '@/../public/images/logo.svg';
import LOGO_WITH_FONT from '@/../public/images/logo-text-side.svg';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';

import { signOut } from 'next-auth/react';

interface SideBarProps {
    defaultCollapsed?: boolean;
    defaultLayout: number[] | undefined;
    navCollapsedSize: number;
    children: React.ReactNode;
}

const SideBar = ({
    defaultCollapsed = false,
    defaultLayout = [265, 440],
    navCollapsedSize,
    children,
}: SideBarProps) => {
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

    const handleLogout = async () => {
        try {
            await signOut();
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`;
                }}
                className="h-full items-stretch"
            >
                <ResizablePanel
                    defaultSize={defaultLayout[0]}
                    collapsedSize={navCollapsedSize}
                    collapsible={true}
                    minSize={15}
                    maxSize={20}
                    onCollapse={() => {
                        setIsCollapsed(true);
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            true,
                        )}`;
                    }}
                    onExpand={() => {
                        setIsCollapsed(false);
                        document.cookie = `react-resizable-panels:collapsed=${JSON.stringify(
                            false,
                        )}`;
                    }}
                    className={cn(
                        isCollapsed && 'min-w-[50px] transition-all duration-300 ease-in-out',
                    )}
                >
                    <Link href={'/dashboard'} className="p-2 flex justify-center">
                        <Image
                            src={LOGO}
                            alt="logo"
                            className={cn(
                                'brightness-0 dark:invert hover:scale-105 transition h-12 object-contain',
                                {
                                    hidden: !isCollapsed,
                                },
                            )}
                        />
                        <Image
                            src={LOGO_WITH_FONT}
                            alt="logo"
                            className={cn(
                                'brightness-0 dark:invert hover:scale-105 transition h-20 object-contain',
                                {
                                    hidden: isCollapsed,
                                },
                            )}
                        />
                    </Link>
                    <Separator />
                    <Nav
                        isCollapsed={isCollapsed}
                        links={[
                            {
                                title: 'Home',
                                icon: Home,
                                variant: 'default',
                                href: '/dashboard',
                            },
                            {
                                title: 'Concurrent Companies',
                                icon: Building,
                                variant: 'default',
                                href: '/dashboard/concurrent-companies',
                            },
                            {
                                title: 'Settings',
                                icon: Settings,
                                variant: 'default',
                            },
                        ]}
                    />
                    <Separator />
                    <div className="flex items-center justify-center mt-4 p-2">
                        <div
                            className={cn(
                                buttonVariants({ size: 'icon' }),
                                'cursor-pointer h-9',
                                isCollapsed ? 'w-9' : ' w-full',
                                'dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white space-x-2',
                            )}
                            onClick={handleLogout}
                        >
                            <LogOutIcon size={16} />
                            {!isCollapsed && 'Logout'}
                        </div>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]}>{children}</ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
};

export default SideBar;
