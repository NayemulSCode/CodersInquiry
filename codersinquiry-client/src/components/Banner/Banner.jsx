import React from 'react';
import './Banner.css';
import ask_question from '../../images/ask_question.png';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container'>
                <div className='banner__row row flex-md-row-reverse'>
                    <div className='banner__col col-md-6'>
                        <img className='banner__colImg m-3 p-5' src={ask_question} alt='' />
                    </div>
                    <div className='banner__col animate__animated animate__bounceInLeft col-md-6'>
                        <h1 className='my-3'>
                            হ্যালো প্রোগ্রামার, <br /> Reduce Fluffy প্রশ্ন-উত্তর সাইটে তোমাকে স্বাগতম
                        </h1>
                        <p data-testid="banner" className='py-4'>তুমি যদি প্রোগ্রামিং-এ নতুন হয়ে থাকো কিংবা শুরু করার কথা ভাবছো কিংবা প্রোগ্রামিং করতে গিয়ে কোন সমস্যায় পড়ে মাথার চুল ছিঁড়ে ফেলার মতো অবস্থা হয় তাহলে এখনই আমাদের এই সাইটে প্রশ্ন করে ফেলো। হয়তো তোমারই কোন সহপাঠী, বন্ধু কিংবা বড় ভাই তোমার প্রশ্নের উত্তর দেয়ার জন্য প্রস্তুত হয়ে বসে আছে।</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
