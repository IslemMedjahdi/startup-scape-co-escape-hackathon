import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ConcurrentCompanies = () => {
    const companies = [
        {
            id: 1,
            companyName: 'Jumia',
            image: '/images/Jumia-Logo.png',
        },
        {
            id: 2,
            companyName: 'Jumia',
            image: '/images/Jumia-Logo.png',
        },
        {
            id: 3,
            companyName: 'Jumia',
            image: '/images/Jumia-Logo.png',
        },
        {
            id: 4,
            companyName: 'Jumia',
            image: '/images/Jumia-Logo.png',
        },
        {
            id: 5,
            companyName: 'Jumia',
            image: '/images/Jumia-Logo.png',
        },
        {
            id: 6,
            companyName: 'Jumia',
            image: '/images/Jumia-Logo.png',
        },
    ];

    return (
        <div className="flex flex-col gap-y-4">
            <p className="text-lg font-medium text-center">
                Possible Concurrent Companies Based on Our Data and the description of Your
                Companies
            </p>
            <p className="text-lg font-medium text-center">
                This data may change After collecting Your startup data
            </p>
            <div className="grid grid-cols-4">
                {companies.map((company, index) => (
                    <Link
                        href={`/dashboard/concurrent-companies/${company.id}`}
                        key={index}
                        className="border p-2 flex items-center justify-center dark:bg-gray-900 dark:hover:bg-gray-800 hover:bg-gray-100 transition"
                    >
                        <Image
                            src={company.image}
                            alt={company.companyName}
                            className="object-contain dark:brightness-0 dark:invert"
                            width={200}
                            height={100}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ConcurrentCompanies;
