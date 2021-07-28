import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../Navbar/Navbar';
import './AskQuestions.css';

const AskQuestions = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <Navbar></Navbar>
            <section>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="p-5">
                            <input className="form-control mb-3" type="text" placeholder="Enter Title" {...register("title", { required: true })} />

                            {errors.title && errors.title.type === "required" && <span>Title is required</span>}

                            <textarea className="form-control mb-3" placeholder="Type Your Question" {...register("description", { required: true })} />

                            {errors.description && errors.description.type === "required" && <span>Description is required</span>}

                            {/* <input onChange={handleImageUpload} type="file" className="form-control mb-3" /> */}
                            <input type="file" className="form-control mb-3" />

                            <input className="btn btn-primary text-white py-2 px-3" type="submit" value="submit" />
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AskQuestions;