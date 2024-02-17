'use client';

import { RegisterRequest } from '@/app/api/auth/register/request';
import { Button } from '@/components/ui/button';
import { useMultiplestepForm } from '@/hooks/useMultiplestepForm';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RegisterSideBar from './components/RegisterSideBar';
import FounderInfoForm from './components/FounderInfoForm';
import CompanyInfoForm from './components/CompanyInfoForm';
import SocialMediaForm from './components/SocialMediaForm';
import TermOfUsageForm from './components/TermOfUsageForm';
import { redirect, useRouter } from 'next/navigation';

const RegisterForm = () => {
    const [formData, setFormData] = useState<RegisterRequest>({
        email: '',
        password: '',
        companyAddress: {
            city: '',
            state: '',
            street: '',
            zip: '',
        },
        companyDescription: '',
        companyEmail: '',
        companyName: '',
        companyPhoneNumber: '',
        founderFirstName: '',
        founderLastName: '',
        goalsAndChallenges: '',
        industry: '',
        phoneNumber: '',
        servicesDescription: '',
        socialMedia: {
            facebook: '',
            instagram: '',
            linkedin: '',
            twitter: '',
        },
        stageOfDevelopement: '',
        targetMarket: '',
        teamSizeFrom: 0,
        teamSizeTo: 0,
        yearFounded: 0,
        companyWebsite: '',
    });

    const router = useRouter();

    const [errors, setErrors] = useState<Record<string, string>>({});

    const { currentStepIndex, goTo, isFirstStep, isLastStep, nextStep, previousStep } =
        useMultiplestepForm(4);

    function updateForm(fieldToUpdate: Partial<RegisterRequest>) {
        setFormData({
            ...formData,
            ...fieldToUpdate,
        });
    }

    const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error)) {
            return;
        }

        if (!isLastStep) return nextStep();

        const res = await fetch('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        try {
            if (res.ok) router.push('/auth/login');
            else alert(JSON.stringify(await res.json()));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div
            className={`flex justify-between ${
                currentStepIndex === 1 ? 'h-[600px] md:h-[500px]' : 'h-[500px]'
            } w-11/12 max-w-screen-lg relative m-1 rounded-lg border border-slate-700 bg-slate-900 p-4`}
        >
            <RegisterSideBar currentStepIndex={currentStepIndex} goTo={goTo} />

            <main className={`w-full md:mt-5 md:w-[65%]`}>
                <form
                    onSubmit={handleOnSubmit}
                    className="w-full flex flex-col justify-between h-full"
                >
                    <AnimatePresence mode="wait">
                        {currentStepIndex === 0 && (
                            <FounderInfoForm
                                errors={errors}
                                form={formData}
                                updateForm={updateForm}
                            />
                        )}
                        {currentStepIndex === 1 && (
                            <CompanyInfoForm
                                errors={errors}
                                form={formData}
                                updateForm={updateForm}
                            />
                        )}
                        {currentStepIndex === 2 && (
                            <SocialMediaForm
                                errors={errors}
                                form={formData}
                                updateForm={updateForm}
                            />
                        )}
                        {currentStepIndex === 3 && (
                            <TermOfUsageForm
                                errors={errors}
                                form={formData}
                                updateForm={updateForm}
                            />
                        )}
                    </AnimatePresence>
                    <div className="w-full items-center flex justify-between">
                        <div className="text-white">
                            {!isFirstStep && (
                                <Button onClick={previousStep} type="button" variant="ghost">
                                    Go Back
                                </Button>
                            )}
                        </div>
                        <div className="flex items-center">
                            <div className="relative after:pointer-events-none after:absolute after:inset-px after:rounded-[11px] after:shadow-highlight after:shadow-white/10 focus-within:after:shadow-[#77f6aa] after:transition">
                                <Button type="submit">
                                    {isLastStep ? 'Confirm' : 'Next Step'}
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default RegisterForm;
