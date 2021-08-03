import React from 'react';
import './QuestionDetail.css';
import authorImg from '../../images/question_author.jpg';
import Answers from './Answers/Answers';

const QuestionDetail = () => {
    return (
        <div className="">
            <div className="detail_container">
                <h1>আমার কোড আমার সাথে কথা বলে না কেন গো ??</h1>
                <div className="tag_div d-flex">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JS</p>
                    <p>React</p>
                </div>
                <div className="detail_div">
                    <p>
                        আমার সোনার বাংলা
                        আমি তোমায় ভালবাসি

                        চিরদিন তোমার আকাশ
                        চিরদিন তোমার আকাশ, তোমার বাতাস আমার প্রাণে—
                        ও মা, আমার প্রাণে বাজায় বাঁশি

                        সোনার বাংলা
                        আমি তোমায় ভালবাসি

                        ও মা, ফাগুনে তোর আমের বনে ঘ্রাণে পাগল করে
                        মরি হায়, হায় রে—
                        ও মা, ফাগুনে তোর আমের বনে ঘ্রাণে পাগল করে
                        ও মা, অঘ্রানে তোর ভরা খেতে কী দেখেছি
                        আমি কী দেখেছি মধুর হাসি

                        সোনার বাংলা
                        আমি তোমায় ভালবাসি

                        কী শোভা, কী ছায়া গো, কী স্নেহ, কী মায়া গো!
                        কী আঁচল বিছায়েছ বটের মূলে, নদীর কূলে কূলে
                        মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো
                        মরি হায়, হায় রে—
                        মা, তোর মুখের বাণী আমার কানে লাগে সুধার মতো
                        মা তোর বদন খানি মলিন হলে আমি নয়ন—
                        ও মা, আমি নয়ন জলে ভাসি

                        সোনার বাংলা
                        আমি তোমায় ভালবাসি|
                    </p>
                </div>
                <div className="question__author">
                    <div className='question__authorAbout'>
                        <h6 className='question__authorName'>Monsur Rana</h6>
                        <p className='question__askingTime'>2 Aug 2021, 12:20 PM</p>
                    </div>
                    <img src={authorImg} alt="user_profile_img" className="question__authorImg" />
                </div>
            </div>
            <h2 className="text-center">অন্যদের উত্তর সমূহ</h2>
            <Answers />
            <Answers />
            <Answers />
            <Answers />
            <Answers />
            <Answers />
        </div>
    );
};

export default QuestionDetail;