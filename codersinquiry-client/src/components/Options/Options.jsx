import React from 'react';
import './Options.css';
import { BsSearch, BsFillQuestionCircleFill, BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Options = () => {
    return (
        <div className='options'>
            <div className='options__row row my-3'>
                <div className='options__col col-md-4'>
                    <div className='options__card card'>
                        <h1>
                            সমাধান <br /> খুঁজুন
                        </h1>
                        <BsSearch className='options__cardIcon' />
                    </div>
                </div>
                <div className='col-md-4'>
                    <Link to='/askQuestion'>
                        <div className='options__card card'>
                            <h1>
                                প্রশ্ন <br /> করুন
                            </h1>
                            <BsFillQuestionCircleFill className='options__cardIcon' />
                        </div>
                    </Link>
                </div>
                <div className='col-md-4'>
                    <Link to='/writeArticle'>
                        <div className='options__card card'>
                            <h1>
                                আর্টিকেল <br /> লিখুন
                            </h1>
                            <BsPencilSquare className='options__cardIcon' />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Options;
