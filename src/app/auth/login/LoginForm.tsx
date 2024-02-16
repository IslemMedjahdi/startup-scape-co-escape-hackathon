'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import LOGO from '@/../public/images/logo.png';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';

import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { cn } from '@/lib/utils';

const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(100),
});

const LoginForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            const res = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
                callbackUrl,
            });

            if (res?.error) {
                form.setError('email', {
                    type: 'manual',
                    message: res.error,
                });
            } else {
                router.push(callbackUrl);
            }
        } catch (error) {
            if (error instanceof Error)
                form.setError('email', {
                    type: 'manual',
                    message: error.message,
                });
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <Image
                src={LOGO}
                alt="logo"
                className={cn(
                    'brightness-0 dark:invert hover:scale-105 transition',
                    loading && 'animate-pulse',
                )}
            />
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 max-w-lg w-full">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Your Email" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter Your Password"
                                        type="password"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button className="w-full space-x-4" type="submit">
                        {loading && <LoadingSpinner />}
                        <span>Submit</span>
                    </Button>
                </form>
            </Form>
        </div>
    );
};

export default LoginForm;
