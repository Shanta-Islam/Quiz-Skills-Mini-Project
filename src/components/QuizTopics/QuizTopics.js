import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';
import HeaderBanner from '../HeaderBanner/HeaderBanner';


const QuizTopics = () => {
    const QuizT = useLoaderData();
    return (
        <div>
            <HeaderBanner></HeaderBanner>
            <div className='md:mt-16 mt-16 lg:mx-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto gap-4 mb-10 lg:px-20 px-10'> 
                {
                    QuizT.data.map(topic=> <QuizTopic key={topic.id} topic={topic}></QuizTopic>)
                    
                }
            </div>
        </div>
    );
};

export default QuizTopics;