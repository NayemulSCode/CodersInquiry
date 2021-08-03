import React from 'react';
import './Questions.css';
import Question from './Question/Question';

const Questions = () => {
    return (
        <div className='questions'>
            <h2>Q&A Discussion</h2>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
        </div>
    );
};

export default Questions;
