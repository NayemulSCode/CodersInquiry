import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Options from '../Options/Options';
// import Main from './Main/Main';
import Questions from '../Questions/Questions';
import QAPieChart from '../QAPieChart/QAPieChart';
import TopVotedQuestion from '../TopVotedQuestion/TopVotedQuestion';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <div className='container my-3'>
                <Options />
                <div className='row'>
                    <div className='col-md-9'>
                        {/* <Main /> */}
                        <Questions />
                    </div>
                    <div className='col-md-3'>
                        <QAPieChart />
                        <TopVotedQuestion />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
