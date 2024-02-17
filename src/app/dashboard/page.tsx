import { Metadata } from 'next';
import React from 'react';
import DashboardContainer from './DashboardContainer';

export const metadata: Metadata = {
    title: 'STARTUP SCAPE | Home',
};

const DashboardHomePage = async () => {
    return <DashboardContainer />;
};

export default DashboardHomePage;
