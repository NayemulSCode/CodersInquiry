import React from 'react';
import logo from '../../images/js.png'
import { Container } from 'react-bootstrap';
const blogData = [
    {
     title: 'What is a cors policy?',
     logo: logo,
    },
    {
        title: 'What is a cors policy?',
        logo: logo,
       },
       {
        title: 'What is a cors policy?',
        logo: logo,
       },

]
const Blog = () => {
    const styles ={display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '10px'}

    return (
        <Container>
            This is blogging section
            <div style={styles}>
             {   blogData.map((datum) => ( 
               
                 <div className="d-flex justify-content-around m-2">
                    <img src={datum.logo} alt="" style={{width: '150px'}}/>
                 </div>
               
                
                ))}
            </div>
        </Container>
    );
};

export default Blog;