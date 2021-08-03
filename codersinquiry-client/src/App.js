import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import CustomNavbar from './components/CustomNavbar/CustomNavbar';
import RegistrationForm from './components/Login/RegistrationForm';
import Courses from './components/Courses/Courses';
import Blog from './components/Blog/Blog';
import TopLearners from './components/TopLearners/TopLearners';
import AskQuestions from './components/AskQuestion/AskQuestions';
import CourseDetails from './components/Courses/CourseDetails';
import Footer from './components/Footer/Footer';
import WriteArticle from './components/WriteArticle/WriteArticle';
import QuestionDetail from './components/QuestionDetail/QuestionDetail';
import Article from './components/Article/Article';

const App = () => {
    return (
        <Router>
            <CustomNavbar />
            <Switch>
                <Route exact path='/'>
                    {/* customNavbar just for testing purpose */}
                    <Home />
                    <Footer />
                </Route>
                <Route path='/login'>
                    <Navbar />
                    <Login />
                    {/* <RegistrationForm /> */}
                </Route>
                <Route path='/askQuestion'>
                    <AskQuestions />
                </Route>
                <Route path='/questionDetail'>
                    <Navbar />
                    <QuestionDetail />
                    <Footer />
                </Route>
                <Route path='/Article'>
                    <Article />
                </Route>
                <Route path='/register'>
                    <Navbar />
                    <RegistrationForm />
                </Route>
                <Route path='/courses'>
                    <Navbar />
                    <Courses />
                    <Footer />
                </Route>
                <Route path='/courseDetails/:courseId'>
                    <Navbar />
                    <CourseDetails />
                    <Footer />
                </Route>
                <Route path='/blogs'>
                    <Navbar />
                    <Blog />
                </Route>
                <Route path='/topLearners'>
                    <Navbar />
                    <TopLearners />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
