import React, { useState } from 'react';
import FormWrapper from './FormWrapper';
import { RegisterRequest } from '@/app/api/auth/register/request';
const Checkbox = ({ label, isChecked, onChange }) => (
    <label className="flex items-center gap-2 cursor-pointer">
        <input
            type="checkbox"
            checked={isChecked}
            onChange={onChange}
            className="form-checkbox h-5 w-5 text-white border-white"
        />
        <span className="text-white">{label}</span>
    </label>
);

type TermOfUsageFormProps = {
    form: RegisterRequest;
    errors: Record<string, string>;
    updateForm: (fieldToUpdate: Partial<RegisterRequest>) => void;
};

const TermOfUsageForm = ({ form, errors, updateForm }: TermOfUsageFormProps) => {
    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleAcceptanceChange = event => {
        setAcceptedTerms(event.target.checked);
    };

    return (
        <FormWrapper title="Term of usage" description="">
            <div className="w-full flex flex-col gap-5 text-white">
                <ul className="flex flex-col gap-4">
                    <li>
                        <p className="font-semibold underline">Data Usage:</p> We collect and
                        analyze user data for improving the platform and may share anonymized
                        insights.
                    </li>
                    <li>
                        <p className="font-semibold underline">User Responsibility:</p> Users must
                        provide accurate information and comply with all applicable laws.
                    </li>
                    <li>
                        <p className="font-semibold underline">Intellectual Property:</p> The
                        platform and its content are owned by us or our licensors.
                    </li>
                    <li>
                        <p className="font-semibold underline">Limitation of Liability:</p> We are
                        not liable for indirect damages arising from platform use.
                    </li>
                    <li>
                        <p className="font-semibold underline">Modifications:</p> We may update the
                        Terms, and your continued use constitutes acceptance.
                    </li>
                    <li>
                        <p className="font-semibold underline">Governing Law:</p> These Terms are
                        governed by [Jurisdiction]&apos;s laws.
                    </li>
                </ul>
                <Checkbox
                    label="I have read and agree to the terms of usage"
                    isChecked={acceptedTerms}
                    onChange={handleAcceptanceChange}
                />
            </div>
        </FormWrapper>
    );
};

export default TermOfUsageForm;
