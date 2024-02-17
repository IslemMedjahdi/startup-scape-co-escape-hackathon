'use client';

import React from 'react';
import Image from 'next/image';
import {
    Area,
    Bar,
    BarChart,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    RadarChart,
    RadialBar,
    RadialBarChart,
    ResponsiveContainer,
    XAxis,
    YAxis,
    LineChart,
    Radar,
    PieChart,
    Pie,
} from 'recharts';
import { Tooltip } from '@radix-ui/react-tooltip';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';

const data = [
    {
        name: 'Jan',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Feb',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Mar',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Apr',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'May',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jun',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Jul',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Aug',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Sep',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Oct',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Nov',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
        name: 'Dec',
        total: Math.floor(Math.random() * 5000) + 1000,
    },
];

const ConcurrentCompanuById = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex gap-y-2 flex-col">
                <p className="text-lg font-medium">Core Company Information</p>
                <div className="flex items-center justify-between gap-4 dark:bg-slate-900 bg-gray-50 rounded p-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src={'/images/Jumia-Logo.png'}
                            width={200}
                            height={200}
                            className="object-contain dark:brightness-0 dark:invert"
                            alt="logo"
                        />
                        <div>
                            <p>
                                <span className="font-medium">Name:</span> Jumia
                            </p>
                            <p>
                                <span className="font-medium">Website: </span>{' '}
                                <a target="_blank" href="https://jumia.com">
                                    Jumia.com
                                </a>
                            </p>
                            <p>
                                <span className="font-medium">Industry:</span> E-commerce
                            </p>
                            <p>
                                <span className="font-medium">Founded Date:</span> 2019
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center self-end gap-1 ">
                        <FacebookIcon className="cursor-pointer" />
                        <TwitterIcon className="cursor-pointer" />
                        <LinkedinIcon className="cursor-pointer" />
                        <InstagramIcon className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="flex gap-y-2 flex-col">
                <p className="text-lg font-medium">Market & Product</p>
                <div className="p-2 flex flex-col gap-y-2">
                    <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col dark:bg-slate-800 rounded p-4 bg-gray-50">
                            <p className="font-medium text-sm">Value Proposition:</p>
                            <p>
                                Jumia is an e-commerce platform that connects sellers and buyers
                                across Africa. They offer a wide range of products and services
                                including electronics, fashion, home appliances, and groceries.
                                Their value proposition is to provide a convenient and secure
                                platform for users to buy and sell products online. They aim to make
                                online shopping accessible to everyone in Africa by offering a
                                variety of products at affordable prices and providing reliable
                                delivery services.
                            </p>
                        </div>
                        <div className="flex flex-col dark:bg-slate-800 rounded p-4 bg-gray-50">
                            <p className="font-medium text-sm"> Target Market:</p>
                            <p>
                                Jumia's target market is the African population. They aim to make
                                online shopping accessible to everyone in Africa by offering a
                                variety of products at affordable prices and providing reliable
                                delivery services. They also target sellers who want to reach a
                                wider audience and expand their business. Jumia's platform is
                                designed to cater to the needs of both buyers and sellers in Africa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-2">
                    <p className="text-base font-medium">Products & Services</p>
                    <div className="h-96">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={[
                                    {
                                        name: 'Electronics',
                                        sales: 5000000,
                                    },
                                    {
                                        name: 'Fashion',
                                        sales: 3000000,
                                    },
                                    {
                                        name: 'Home & Appliances',
                                        sales: 2000000,
                                    },
                                    {
                                        name: 'Groceries',
                                        sales: 1500000,
                                    },
                                    {
                                        name: 'Beauty & Health',
                                        sales: 1000000,
                                    },
                                    {
                                        name: 'Other',
                                        sales: 500000,
                                    },
                                ]}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sales" stackId="a" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="p-2">
                    <p className="text-base font-medium">Market Share & Traction</p>
                </div>
            </div>
            <div className="flex gap-y-2 flex-col">
                <p className="text-lg font-medium">Financial Performance</p>
                <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 flex flex-col gap-y-2">
                        <p className="text-base font-medium">Revenue & Growth Rate</p>
                        <div className="h-96">
                            <ResponsiveContainer width="90%" height={350}>
                                <BarChart data={data}>
                                    <XAxis
                                        dataKey="name"
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#888888"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        tickFormatter={value => `${value}K DZD`}
                                    />
                                    <Bar
                                        dataKey="total"
                                        fill="currentColor"
                                        radius={[4, 4, 0, 0]}
                                        className="fill-primary"
                                    />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="p-2">
                        <p className="text-base font-medium">Funding Rounds & Investors</p>
                    </div>
                    <div className="p-2">
                        <p className="text-base font-medium">sales per wilayas</p>
                    </div>
                </div>
            </div>

            <div className="flex gap-y-2 flex-col">
                <p className="text-lg font-medium">Team & Culture</p>
                <div className="p-2">
                    <p className="text-base font-medium">Founders & Key Executives</p>
                    <div className="flex items-center gap-2 justify-center">
                        {[
                            {
                                fullName: 'John Doe',
                                image: '/images/avatar.avif',
                                profile: 'Chief Executive Officer',
                            },
                            {
                                fullName: 'Jane Doe',
                                image: '/images/avatar.avif',
                                profile: 'Chief Operating Officer',
                            },
                            {
                                fullName: 'John Doe',
                                image: '/images/avatar.avif',
                                profile: 'Chief Financial Officer',
                            },
                            {
                                fullName: 'Jane Doe',
                                image: '/images/avatar.avif',
                                profile: 'Chief Technology Officer',
                            },
                            {
                                fullName: 'John Doe',
                                image: '/images/avatar.avif',
                                profile: 'Chief Marketing Officer',
                            },
                        ].map((person, index) => (
                            <div key={index} className="flex items-center flex-col">
                                <Image
                                    src={person.image}
                                    alt={person.fullName}
                                    className="rounded-full h-24 w-24 border"
                                    width={200}
                                    height={200}
                                />
                                <p className="font-medium">{person.fullName}</p>
                                <p className="text-gray-500 dark:text-gray-300 text-sm font-medium">
                                    {person.profile}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="p-2 flex gap-2 flex-col">
                    <p className="text-base font-medium">Employees Number & Location</p>
                    <div className="grid grid-cols-3 gap-2">
                        <div className="bg-gray-50 dark:bg-slate-900 p-2 rounded flex flex-col items-center">
                            <span className="font-medium">Employees Number</span>
                            <p>50</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-slate-900 p-2 rounded flex flex-col items-center">
                            <span className="font-medium">Location</span>
                            <p>Algiers, Algeria</p>
                        </div>
                        <div className="bg-gray-50 dark:bg-slate-900 p-2 rounded flex flex-col items-center">
                            <span className="font-medium">Offices Number</span>
                            <p>5</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-y-2 flex-col">
                <p className="text-lg font-medium">Additional Points</p>
                <div className="p-2">
                    <p className="text-base font-medium">News & Mentions</p>
                </div>
                <div className="p-2">
                    <p className="text-base font-medium">Partnerships & Collaborations</p>
                </div>
                <div className="p-2">
                    <p className="text-base font-medium">Legal & Regulatory Issues</p>
                </div>
            </div>
        </div>
    );
};

export default ConcurrentCompanuById;
