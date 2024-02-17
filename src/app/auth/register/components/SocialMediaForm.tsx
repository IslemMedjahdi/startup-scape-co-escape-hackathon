import React from 'react';
import FormWrapper from './FormWrapper';
import { RegisterRequest } from '@/app/api/auth/register/request';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '../../../../components/ui/textarea';

type SocialMediaFormProps = {
    form: RegisterRequest;
    errors: Record<string, string>;
    updateForm: (fieldToUpdate: Partial<RegisterRequest>) => void;
};

const SocialMediaForm = ({ form, errors, updateForm }: SocialMediaFormProps) => {
    return (
        <FormWrapper title="Social Media" description="">
            <div className="w-full flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="facebook">
                        Facebook
                    </Label>
                    <Input
                        autoFocus
                        type="text"
                        name="facebook"
                        id="facebook"
                        placeholder="e.g. facebook.com"
                        value={form.socialMedia.facebook}
                        onChange={e =>
                            updateForm({
                                socialMedia: { ...form.socialMedia, facebook: e.target.value },
                            })
                        }
                        className="w-full"
                        required={false}
                    />
                    {errors.facebook && <p className="text-red-500 text-sm">{errors.facebook}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="linkedin">
                        Linkedin
                    </Label>
                    <Input
                        autoFocus
                        type="text"
                        name="linkedin"
                        id="linkedin"
                        placeholder="e.g. linkedin.com"
                        value={form.socialMedia.linkedin}
                        onChange={e =>
                            updateForm({
                                socialMedia: { ...form.socialMedia, linkedin: e.target.value },
                            })
                        }
                        className="w-full"
                        required={false}
                    />
                    {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="twitter">
                        Twitter
                    </Label>
                    <Input
                        type="text"
                        name="twitter"
                        id="twitter"
                        placeholder="e.g. twitter.com"
                        value={form.socialMedia.twitter}
                        className="w-full"
                        onChange={e =>
                            updateForm({
                                socialMedia: { ...form.socialMedia, twitter: e.target.value },
                            })
                        }
                        required={false}
                    />
                    {errors.twitter && <p className="text-red-500 text-sm">{errors.twitter}</p>}
                </div>
                <div className="flex flex-col gap-2">
                    <Label className="text-white" htmlFor="instagram">
                        instagram
                    </Label>
                    <Input
                        type="text"
                        name="instagram"
                        id="instagram"
                        placeholder="e.g. instagram.com"
                        value={form.socialMedia.instagram}
                        className="w-full"
                        onChange={e =>
                            updateForm({
                                socialMedia: { ...form.socialMedia, instagram: e.target.value },
                            })
                        }
                        required={false}
                    />
                    {errors.instagram && <p className="text-red-500 text-sm">{errors.instagram}</p>}
                </div>
            </div>
        </FormWrapper>
    );
};

export default SocialMediaForm;
