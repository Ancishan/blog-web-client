import React from 'react';
import Banner from './Banner';
import TabCategory from './TabCategory';
import NewsLetter from './NewsLetter';
import PopularPost from './PopularPost';

const Home = () => {
    return (
        <div className='mt-24'>
            <Banner></Banner>
            <TabCategory></TabCategory>
            <PopularPost></PopularPost>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;