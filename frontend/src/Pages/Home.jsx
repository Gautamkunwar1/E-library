import React from 'react';
import FAQ from '../Components/FAQ';
import Index from '../Components/HelperSection';
import PartnerBanner from '../Components/PartnerBanner';
import Banner from '../Components/Banner';

function Home() {
    return (
        <>
            <Banner />
            <Index/>
            <PartnerBanner/>
            <FAQ/>
        </>
    )
}

export default Home
