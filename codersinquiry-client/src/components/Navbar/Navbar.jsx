import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Login from '../Login/Login';

const Navbar = () => {
    return (
        <nav class='navbar navbar-expand-lg navbar-light bg-light'>
            <div class='container-fluid'>
                <Link class='navbar-brand' to='/'>
                    Reduce Fluffy
                </Link>
                <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse' id='navbarSupportedContent'>
                    <ul class='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li class='nav-item'>
                            <Link to="/login" class='nav-link active' aria-current='page' href="/login">
                                Login
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to="/courses" class='nav-link active' aria-current='page' href="/courses">
                            Courses
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to="/blogs" class='nav-link active' aria-current='page' href="/courses">
                                Blogs
                            </Link>
                        </li>
                        <li class='nav-item'>
                            <Link to="/topLearners" class='nav-link active' aria-current='page' href="/topLearners">
                               Top Learners
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

// import React from 'react';
// import logo from '../../images/js.png'
// import { Container } from 'react-bootstrap';
// const blogData = [
//     {
//      title: 'What is a cors policy?',
//      logo: logo,
//     },
//     {
//         title: 'What is a cors policy?',
//         logo: logo,
//        },
//        {
//         title: 'What is a cors policy? Cors policy..',
//         logo: logo,
//        },

// ]
// const Blog = () => {
//     const styles ={display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', padding: '10px'}

//     return (
//         <Container>
//             This is blogging section
//             <div style={styles}>
//              {   blogData.map((datum) => ( 
               
//                  <div className="d-flex justify-content-around m-2">
//                     <img src={datum.logo} alt="" style={{width: '150px'}}/>
//                  </div>
               
                
//                 ))}
//             </div>
//         </Container>
//     );
// };

// export default Blog;