'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { Home } from 'lucide-react';

import { cn } from '@/lib/utils';
import { TooltipProvider } from '@/components/ui/tooltip';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import Nav from './Nav';

import LOGO from '@/../public/images/logo.png';
import LOGO_WITH_FONT from '@/../public/images/logo-with-font.png';

import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

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
                    <Link href={'/dashboard'}>
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
                            },
                        ]}
                    />
                    <Separator />
                    <div className="p-2">
                        <Button size="sm" className="w-full" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize={defaultLayout[1]}>{children}</ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    );
};

export default SideBar;
