import Image from 'next/image';
import React from 'react';

const ConcurrentCompanies = () => {
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex gap-y-2 flex-col">
                <p className="text-lg font-medium">Core Company Information</p>
                <div className="flex items-center gap-4 dark:bg-slate-900 bg-gray-100 rounded p-4">
                    <Image
                        src={'/images/yalidine-logo.png'}
                        width={200}
                        height={200}
                        className="object-contain dark:brightness-0 dark:invert"
                        alt="logo"
                    />
                    <div>
                        <p>
                            <span className="font-medium">Name:</span> Yalidine
                        </p>
                        <p>
                            <span className="font-medium">Website </span>{' '}
                            <a target="_blank" href="https://Yalidine.com">
                                Yalidine.com
                            </a>
                        </p>
                        <p>
                            <span className="font-medium">Industry:</span> Services
                        </p>
                        <p>
                            <span className="font-medium">Founded Date:</span> 2019
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex gap-y-2 flex-col">
                <p className="text-lg font-medium">Market & Product</p>
            </div>
        </div>
    );
};

export default ConcurrentCompanies;
