import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import Footer from './components/Footer/Footer';
import RegistrationForm from './components/Login/RegistrationForm';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import TopLearners from './components/TopLearners/TopLearners';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Header />
                    {/* customNavbar just for testing purpose */}
                    {/* <CustomNavbar></CustomNavbar> */}
                    <Home />
                    <Footer />
                </Route>
                <Route path="/login">
                    <Navbar />
                    <Login />
                    {/* <RegistrationForm /> */}
                </Route>
                <Route path="/register">
                    <Navbar />
                    <RegistrationForm />
                </Route> 
                <Route path="/courses">
                    <Courses/>
                </Route>
                <Route path="/blogs">
                    <Blog/>
                </Route>
                <Route path="/topLearners">
                   <TopLearners/>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;