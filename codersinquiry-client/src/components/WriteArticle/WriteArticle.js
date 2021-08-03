import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import WriteArticleImage from '../../images/write_article1.png';
import './WriteArticle.css';

const WriteArticle = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-around form_container">
                <form onSubmit={handleSubmit(onSubmit)} className="p-5 form">

                    <input className="form-control mb-1" type="text" placeholder="টাইটেল লিখুন..." {...register("title", { required: true })} />

                    {errors.title && errors.title.type === "required" && <span style={{ color: "coral" }}>টাইটেল আবশ্যক</span>}


                    <textarea className="form-control mb-1 mt-3" placeholder="আর্টিকেলের মেইন অংশ লিখুন..." {...register("description", { required: true })} />

                    {errors.description && errors.description.type === "required" && <span style={{ color: "coral" }}>আর্টিকেলের মেইন অংশ আবশ্যক</span>}

                    {/* <input onChange={handleImageUpload} type="file" className="form-control mb-3" /> */}
                    <input type="file" className="form-control mb-3 mt-3" />

                    <input className="btn btn-warning text-black py-2 px-3" type="submit" value="সাবমিট করুন" />
                </form> 
                <img src={WriteArticleImage} alt="WriteArticleImage" /> 
            </div>
            <Footer />
        </div>
    );
};

export default WriteArticle;