import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'flowbite-react';

const QuizTopic = ({ topic }) => {
    const { id, name, logo, total } = topic;
    return (
        <div className='lg:mt-5'>
            <div className="max-w-sm">
                <Card imgSrc={logo === 'https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png' ? 'https://i.ibb.co/qBTGWXR/52412639027-5692c15b3f-o.png' : logo}>
                    <Link to={`/quiz/${id}`}>
                        <h5 className="text-2xl font-bold text-gray-900">
                            {name}
                        </h5>
                    </Link>
                    <div className="flex items-center justify-between">
                        <span className="text-gray-900">
                            Question : {total}
                        </span>
                        <Link
                            to={`/quiz/${id}`}
                            className="flex items-center rounded-lg bg-sky-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
                            Start
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default QuizTopic;