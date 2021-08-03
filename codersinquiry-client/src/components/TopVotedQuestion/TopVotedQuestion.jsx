import React from 'react';
import './TopVotedQuestion.css';
import { Link } from 'react-router-dom';
import { BsQuestionDiamondFill } from 'react-icons/bs';

const TopVotedQuestion = () => {
    return (
        <div className='topVotedQuestion card mt-3'>
            <h4 className='topVotedQuestion__title'>Top Voted Questions</h4>
            <ol className='topVotedQuestion__list'>
                <Link to='/' className='d-flex align-items-baseline'>
                    <li className='topVotedQuestion__question'>সি প্রোগ্রামিং-এর সবচেয়ে ভালো রিসোর্স কেউ কি প্রদান করতে পারবেন?</li>
                </Link>
                <Link to='/' className='d-flex align-items-baseline'>
                    <li className='topVotedQuestion__question'>কীভাবে সেরা প্রোগ্রামার হওয়া যায়?</li>
                </Link>
                <Link to='/' className='d-flex align-items-baseline'>
                    <li className='topVotedQuestion__question'>প্রোগ্রামার হওয়ার জন্য গণিত কতটা গুরুত্বপূর্ণ?</li>
                </Link>
                <Link to='/' className='d-flex align-items-baseline'>
                    <li className='topVotedQuestion__question'>Software Engineer হওয়ার ধাপগুলো কি হতে পারে? অভিজ্ঞ কেউ জানালে উপকৃত হতো।</li>
                </Link>
                <Link to='/' className='d-flex align-items-baseline'>
                    <li className='topVotedQuestion__question'>স্বশিক্ষিত সফট্‌ওয়্যার নির্মাতা হওয়া কি সম্ভব? যদি সম্ভব হয়, তাহলে নিজেকে কীভাবে গড়ে তোলা উচিত?</li>
                </Link>
            </ol>
            <BsQuestionDiamondFill className='topVotedQuestion__icon' />
        </div>
    );
};

export default TopVotedQuestion;
