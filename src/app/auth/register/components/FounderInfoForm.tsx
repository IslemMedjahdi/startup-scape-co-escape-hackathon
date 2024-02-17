import React from 'react';
import FormWrapper from './FormWrapper';
import { RegisterRequest } from '@/app/api/auth/register/request';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

type FounderInfoFormProps = {
    form: RegisterRequest;
    errors: Record<string, string>;
    updateForm: (fieldToUpdate: Partial<RegisterRequest>) => void;
};

const FounderInfoForm = ({ form, errors, updateForm }: FounderInfoFormProps) => {
    return (
        <FormWrapper title="Founder info" description="">
            <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="firstName">
                        First Name
                    </Label>
                    <Input
                        autoFocus
                        type="text"
                        name="FirstName"
                        id="firstName"
                        placeholder="e.g. Stephen"
                        value={form.founderFirstName}
                        onChange={e => updateForm({ founderFirstName: e.target.value })}
                        className="w-full"
                        required
                    />
                    {errors.founderFirstName && (
                        <p className="text-red-500 text-sm">{errors.founderFirstName}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="lastName">
                        Last Name
                    </Label>
                    <Input
                        autoFocus
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="e.g. King"
                        value={form.founderLastName}
                        onChange={e => updateForm({ founderLastName: e.target.value })}
                        className="w-full"
                        required
                    />
                    {errors.founderLastName && (
                        <p className="text-red-500 text-sm">{errors.founderLastName}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="email">
                        Email Address
                    </Label>
                    <Input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={form.email}
                        className="w-full"
                        onChange={e => updateForm({ email: e.target.value })}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="password">
                        Password
                    </Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        value={form.password}
                        className="w-full"
                        onChange={e => updateForm({ password: e.target.value })}
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="phone">
                        Phone Number
                    </Label>
                    <Input
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="e.g. +1 234 567 890"
                        value={form.phoneNumber}
                        className="w-full"
                        onChange={e => updateForm({ phoneNumber: e.target.value })}
                        required
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
            </div>
        </FormWrapper>
    );
};

export default FounderInfoForm;
