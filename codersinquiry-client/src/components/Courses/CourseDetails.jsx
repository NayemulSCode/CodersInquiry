import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = () => {
  const {courseId} = useParams();

  // all components 

const handleClick = () => {

}

    return (
        <main className="d-flex flex-direction-column h-100 p-1">
         {/* This part will be dynamic, just do it demo feeling */}
          <section className="w-75">
          <h4>This is course {courseId} details page</h4> 
          </section>
          <section className="w-25 index-div">
            <div>
            <h6>Installation</h6>
             <div onClick={() => handleClick()}>
             <h6>Getting Started</h6>
               <p>Add React to a Website</p>
             </div>
            </div>
            <h6>Main Concept</h6>
            <h6>Advance Guide</h6>
          </section>
          
        </main>
    );
};

export default CourseDetails;