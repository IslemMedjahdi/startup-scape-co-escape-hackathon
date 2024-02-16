export interface RegisterRequest {
    email: string;
    password: string;
    founderFirstName: string;
    founderLastName: string;
    phoneNumber: string;
    companyName: string;
    industry: string;
    companyPhoneNumber: string;
    companyEmail: string;
    companyWebsite?: string;
    socialMedia: {
        facebook?: string;
        linkedin?: string;
        twitter?: string;
        instagram?: string;
    };

    companyDescription: string;
    companyAddress: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
    yearFounded: number;

    servicesDescription: string;
    stageOfDevelopement: string;

    targetMarket: string;

    teamSizeFrom: number;
    teamSizeTo: number;

    goalsAndChallenges: string;
}
