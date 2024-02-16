'use client';

import { RegisterRequest } from '@/app/api/auth/register/request';
import { Button } from '@/components/ui/button';
import { useMultiplestepForm } from '@/hooks/useMultiplestepForm';
import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import RegisterSideBar from './components/RegisterSideBar';
import SuccessMessage from './components/SuccessMessage';
import FounderInfoForm from './components/FounderInfoForm';

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

    const [errors, setErrors] = useState<Record<string, string>>({});

    const {
        currentStepIndex,
        goTo,
        isFirstStep,
        isLastStep,
        nextStep,
        previousStep,
        showSuccessMsg,
    } = useMultiplestepForm(4);

    function updateForm(fieldToUpdate: Partial<RegisterRequest>) {
        setFormData({
            ...formData,
            ...fieldToUpdate,
        });
    }

    const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (Object.values(errors).some(error => error)) {
            return;
        }
        nextStep();
    };

    return (
        <div
            className={`flex justify-between ${
                currentStepIndex === 1 ? 'h-[600px] md:h-[500px]' : 'h-[500px]'
            } w-11/12 max-w-screen-lg relative m-1 rounded-lg border border-slate-700 bg-slate-900 p-4`}
        >
            {!showSuccessMsg ? (
                <RegisterSideBar currentStepIndex={currentStepIndex} goTo={goTo} />
            ) : (
                ''
            )}
            <main className={`${showSuccessMsg ? 'w-full' : 'w-full md:mt-5 md:w-[65%]'}`}>
                {showSuccessMsg ? (
                    <AnimatePresence mode="wait">
                        <SuccessMessage />
                    </AnimatePresence>
                ) : (
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
                            {currentStepIndex === 1 && <div>zawaj</div>}
                            {currentStepIndex === 2 && <div>raba3</div>}
                            {currentStepIndex === 3 && <div>5amas</div>}
                        </AnimatePresence>
                        <div className="w-full items-center flex justify-between">
                            <div className="">
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
                )}
            </main>
        </div>
    );
};

export default RegisterForm;
