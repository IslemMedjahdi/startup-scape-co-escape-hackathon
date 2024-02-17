import React from 'react';
import FormWrapper from './FormWrapper';
import { RegisterRequest } from '@/app/api/auth/register/request';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '../../../../components/ui/textarea';

type CompanyInfoFormProps = {
    form: RegisterRequest;
    errors: Record<string, string>;
    updateForm: (fieldToUpdate: Partial<RegisterRequest>) => void;
};

const CompanyInfoForm = ({ form, errors, updateForm }: CompanyInfoFormProps) => {
    return (
        <FormWrapper title="Company info" description="">
            <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName">Company Name</Label>
                    <Input
                        autoFocus
                        type="text"
                        name="firstName"
                        id="firstName"
                        placeholder="e.g. Yassir"
                        value={form.companyName}
                        onChange={e => updateForm({ companyName: e.target.value })}
                        className="w-full"
                        required
                    />
                    {errors.companyName && (
                        <p className="text-red-500 text-sm">{errors.companyName}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="Company Description">Company Description</Label>
                    <Textarea
                        name="Company Description"
                        id="companyWebsite"
                        placeholder="e.g. description...."
                        value={form.companyDescription}
                        className="w-full"
                        onChange={e => updateForm({ companyDescription: e.target.value })}
                    />
                    {errors.companyDescription && (
                        <p className="text-red-500 text-sm">{errors.companyDescription}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="Company Email">Company Email</Label>
                    <Input
                        type="text"
                        name="Company Email"
                        id="Company Email"
                        placeholder="e.g. stephenking@lorem.com"
                        value={form.companyEmail}
                        className="w-full"
                        onChange={e => updateForm({ companyEmail: e.target.value })}
                        required
                    />
                    {errors.companyEmail && (
                        <p className="text-red-500 text-sm">{errors.companyEmail}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="companyphone">Company Phone</Label>
                    <Input
                        type="tel"
                        name="companyphone"
                        id="companyphone"
                        placeholder="e.g. +1 234 567 890"
                        value={form.companyPhoneNumber}
                        className="w-full"
                        onChange={e => updateForm({ companyPhoneNumber: e.target.value })}
                        required
                    />
                    {errors.companyPhoneNumber && (
                        <p className="text-red-500 text-sm">{errors.companyPhoneNumber}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="company website">Company Website</Label>
                    <Input
                        type="url"
                        name="company website"
                        id="company website"
                        placeholder="e.g. google.com"
                        value={form.companyWebsite}
                        className="w-full"
                        onChange={e => updateForm({ companyWebsite: e.target.value })}
                        required={false}
                    />
                    {errors.companyWebsite && (
                        <p className="text-red-500 text-sm">{errors.companyWebsite}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="target market">Target Market</Label>
                    <Input
                        type="url"
                        name="target market"
                        id="target market"
                        placeholder="e.g. e-commerce, retail, etc."
                        value={form.targetMarket}
                        className="w-full"
                        onChange={e => updateForm({ targetMarket: e.target.value })}
                        required={false}
                    />
                    {errors.targetMarket && (
                        <p className="text-red-500 text-sm">{errors.targetMarket}</p>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="year founded">Year Founded</Label>
                    <Input
                        type="number"
                        name="year founded"
                        id="year founded"
                        placeholder="e.g. 2021."
                        value={form.yearFounded}
                        className="w-full"
                        onChange={e => updateForm({ yearFounded: Number(e.target.value) })}
                        required={false}
                    />
                    {errors.yearFounded && (
                        <p className="text-red-500 text-sm">{errors.yearFounded}</p>
                    )}
                </div>
            </div>
        </FormWrapper>
    );
};

export default CompanyInfoForm;
