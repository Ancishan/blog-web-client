import d1 from '../assets/fl1.jpg'
import d2 from '../assets/f3jpg.jpg'
import d3 from '../assets/flowe.png'
import t1 from '../assets/t1.png'
import t5 from '../assets/t2.jpg'
import t2 from '../assets/t3.jpg'
import t4 from '../assets/t4.jpg'
import f1 from '../assets/food.jpg'
import f2 from '../assets/f1.jpg'
import f3 from '../assets/f3.jpg'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PopularPost = () => {
    useEffect(() => {
        AOS.init();
      }, []); 
    return (
        <div className='mt-10' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="0">
        <h2 className='text-3xl font-bold text-blue-500 text-center pb-6'>Our Gallery Section</h2>
        <div>
            <h2 className='text-3xl font-bold text-blue-500 text-center py-8' data-aos="fade-up">Flower</h2>
            <div className='grid grid-cols-1 md:grid-cols-2' data-aos="fade-up">
                <img src={d1} alt="" />
                <img src={d2} alt="" />
                <img src={d3} alt="" />
            </div>
        </div>
        <div>
            <h2 className='text-3xl font-bold text-blue-500 text-center py-8' data-aos="fade-up">Food Blog</h2>
            <div className='grid grid-cols-2 md:grid-cols-2 w-96 md:w-full' data-aos="fade-up">
                <img className='w-96' src={f1} alt="" />
                <img src={f2} alt="" />
                <img src={f3} alt="" />
            </div>
        </div>
        <div>
            <h2 className='text-3xl font-bold text-blue-500 text-center py-8' data-aos="fade-up">Tourist place</h2>
            <div className='grid grid-cols-1 md:grid-cols-2' data-aos="fade-up">
                <img src={t1} alt="" />
                <img src={t2} alt="" />
                <img src={t4} alt="" />
                <img src={t5} alt="" />
            </div>
        </div>
    </div>
    );
};
export default PopularPost;
