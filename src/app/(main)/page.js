import ContactSections from '@/Components/Home/ContactSections';
import DownloadtheApp from '@/Components/Home/DownloadtheApp ';
import GroupSubscriptionBenefits from '@/Components/Home/GroupSubscriptionBenefits';
import Hero from '@/Components/Home/Hero';
import HowItWorks from '@/Components/Home/HowItWorks';
import SiteFooter from '@/Components/Home/SiteFooter';
import ThePlanThatFits from '@/Components/Home/ThePlanThatFits';
import React from 'react';

const Page = () => {
    return (
        <div>
            <Hero />
            <GroupSubscriptionBenefits />
            <HowItWorks />
            <ThePlanThatFits />
            <DownloadtheApp />
            <ContactSections />
            <SiteFooter />
        </div>
    );
}

export default Page;
