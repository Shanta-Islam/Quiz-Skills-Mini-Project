import React from 'react';
import Banner from '../../images/banner.jpg';

const HeaderBanner = () => {
    return (
        <div className='lg:flex justify-around items-center lg:px-20 px-10 lg:py-0 py-10'>
            <div className='headerText text-left'>
                <h2 className='text-3xl font-medium'>Easy and Intuitive <span className='text-sky-500'>Online Quiz</span></h2>
                <p className='mt-4'>QuizSkills is a fun site that can test your knowledge and make you happier at the same time.This is an incredible resource and is extremely versatile; it is a beneficial platform for people of all ages and abilities.</p>
            </div>
            <img src={Banner} alt="" className='lg:w-2/4 w-full'/>
        </div>
    );
};

export default HeaderBanner;