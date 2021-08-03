import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import thinker from '../../images/thinker.png';
import './AskQuestions.css';

const AskQuestions = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <Navbar />
            <div className="d-flex justify-content-around form_section">
                <form onSubmit={handleSubmit(onSubmit)} className="p-5 form">
                    <p>টাইটেল</p>
                    <input className="form-control mb-1" type="text" placeholder="টাইটেল লিখুন..." {...register("title", { required: true })} />

                    {errors.title && errors.title.type === "required" && <span style={{ color: "coral" }}>টাইটেল আবশ্যক</span>}
                    <p>প্রশ্ন/সমস্যা</p>
                    <textarea className="form-control mb-1" placeholder="আপনার প্রশ্ন/সমস্যা লিখুন..." {...register("description", { required: true })} />

                    {errors.description && errors.description.type === "required" && <span style={{ color: "coral" }}>প্রশ্ন/সমস্যা'র অংশ আবশ্যক</span>}

                    {/* <input onChange={handleImageUpload} type="file" className="form-control mb-3" /> */}
                    <p>স্ক্রিনশট/ছবি</p>
                    <input type="file" className="form-control mb-3" />

                    <input className="btn btn-warning text-black py-2 px-3" type="submit" value="সাবমিট করুন" />
                </form>
                <img src={thinker} alt={thinker} />
            </div>

            <Footer />
        </div>
    );
    
};

export default AskQuestions;