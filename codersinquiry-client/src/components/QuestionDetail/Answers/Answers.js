import React from 'react';
import './Answers.css';
import authorImg from '../../../images/question_author.jpg';

const Answers = () => {
    return (
        <div className="answers">
            <p>আপনি রবি ঠাকুরের গান কেন গাইবেন ? যেখানে আমার দেশে জেমস, আইয়ুব বাচ্চুর মতো লোক আছে ? কেন....?</p>
            <div className="answered_author">
                <div className='answered_authorAbout'>
                    <h6 className='answered_authorName'>Monsur Rana</h6>
                    <p className='question__askingTime'>2 Aug 2021, 12:20 PM</p>
                </div>
                <img src={authorImg} alt="user_profile_img" className="answered_authorImg" />
            </div>
        </div>
    );
};

export default Answers;