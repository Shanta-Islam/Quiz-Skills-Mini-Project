import { Alert, Card } from 'flowbite-react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const Question = ({ question, handleAns }) => {
    const [isActive, setIsActive] = useState(true);
    const handleAnsView = () => {
        setIsActive(current => !current);
    };
    return (
        <div className='mt-5'>
            <ToastContainer />
            <Card>
                <div className='flex justify-between'>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white max-h-screen ">
                        {question.question.slice(3, -4)}
                    </h5>
                    <EyeIcon onClick={handleAnsView} className={isActive ? 'h-6 w-6' : 'hidden'} />
                    <EyeSlashIcon onClick={handleAnsView} className={isActive ? 'hidden' : 'h-6 w-6'} />
                </div>
                {
                    question.options.map(option =>
                        <div onClick={() => handleAns(option, question.correctAnswer)} className='cursor-pointer border-solid border-2 border-sky-600 hover:bg-sky-600 hover:text-white p-3 rounded'>
                            {option}
                        </div>
                    )
                }
            </Card>
            <div className={isActive ? 'hidden' : ''}>
                <Alert
                    color="success"
                    onDismiss={function onDismiss() { handleAnsView() }}>
                    <span>
                        <span className="font-medium">
                            Correct Answer :
                        </span>
                        {' '}{question.correctAnswer}
                    </span>
                </Alert>
            </div>
        </div>
    );
};

export default Question;