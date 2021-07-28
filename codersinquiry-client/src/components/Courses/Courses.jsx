import React from 'react';
import js from '../../images/js.png'
import python from '../../images/python.png'
import C from '../../images/c.png'
import { Container } from 'react-bootstrap';

const coursesData = [
    {
     courseName: 'JavaScript',
     logo: js,
    },
    {
        courseName: 'Python',
        logo: python,
    },
    {
        courseName: 'C++',
        logo: C,
    },
    {
        courseName: 'JavaScript',
        logo: js,
       },
       {
           courseName: 'Python',
           logo: python,
       },
       {
           courseName: 'C++',
           logo: C,
       },
       {
        courseName: 'JavaScript',
        logo: js,
       },
       {
           courseName: 'Python',
           logo: python,
       },
       {
           courseName: 'C++',
           logo: C,
       },
       {
        courseName: 'JavaScript',
        logo: js,
       },
       {
           courseName: 'Python',
           logo: python,
       },
       {
           courseName: 'C++',
           logo: C,
       },
]
const Courses = () => {
    const styles ={display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '10px'}
    const cardStyle = {boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset', justifyContent: 'space-around',  border: '1.8px solid #dce2e5', borderRadius: '4px', textAlign: 'center', height: '196px', width: '174px', marginBottom: '10px', padding: '10px'}

    return (
        <Container>
        <h2 className="text-center m-5">What would you like to learn?</h2>
        <div style={styles}>
            {
                coursesData?.map((datum) => 
                <div style={cardStyle} key={datum.courseName}>
                    <img src={datum.logo} alt={datum?.courseName} style={{width: '110px' ,borderRadius: '50%'}} />
                    <h4>{datum.courseName}</h4>
                    
                </div>
                
                )
                
            }
        </div>
        </Container>
    );
};

export default Courses;