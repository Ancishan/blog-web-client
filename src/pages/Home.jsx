import React from 'react';
import Banner from './Banner';
import TabCategory from './TabCategory';
import NewsLetter from './NewsLetter';

const Home = () => {
    return (
        <div className='mt-24'>
            <Banner></Banner>
            <TabCategory></TabCategory>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;