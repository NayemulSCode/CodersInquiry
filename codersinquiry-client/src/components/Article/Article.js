import React from 'react';
import './Article.css';
import WriteImage from '../../images/publish.jpg';
import RichTextEditor from '../RichTextEditor/RichTextEditor';

const Article = () => {
    return (
        <div className="write">
            <img src={WriteImage} alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    {/* <textarea placeholder="Write your article ..." type="text" className="writeInput writeText" > </textarea> */}
                   <div className="writeInput writeText">
                   <RichTextEditor></RichTextEditor>
                   </div>                    
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
};

export default Article;