import React from 'react';
import FormWrapper from './FormWrapper';
import { RegisterRequest } from '@/app/api/auth/register/request';

type TermOfUsageFormProps = {
    form: RegisterRequest;
    errors: Record<string, string>;
    updateForm: (fieldToUpdate: Partial<RegisterRequest>) => void;
};

const TermOfUsageForm = ({ form, errors, updateForm }: TermOfUsageFormProps) => {
    return (
        <FormWrapper title="Term of usage" description="">
            <div className="w-full flex flex-col gap-5">
                <ul>
                    <li>
                        <p className="font-semibold">Data Usage:</p> We collect and analyze user
                        data for improving the platform and may share anonymized insights.
                    </li>
                    <li>
                        <p className="font-semibold">User Responsibility:</p> Users must provide
                        accurate information and comply with all applicable laws.
                    </li>
                    <li>
                        <p className="font-semibold">Intellectual Property:</p> The platform and its
                        content are owned by us or our licensors.
                    </li>
                    <li>
                        <p className="font-semibold">Limitation of Liability:</p> We are not liable
                        for indirect damages arising from platform use.
                    </li>
                    <li>
                        <p className="font-semibold">Modifications:</p> We may update the Terms, and
                        your continued use constitutes acceptance.
                    </li>
                    <li>
                        <p className="font-semibold">Governing Law:</p> These Terms are governed by
                        [Jurisdiction]&apos;s laws.
                    </li>
                </ul>
            </div>
        </FormWrapper>
    );
};

export default TermOfUsageForm;
