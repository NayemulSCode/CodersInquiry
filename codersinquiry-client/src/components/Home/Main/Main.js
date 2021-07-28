import React from 'react'
import MainComponent from './MainComponent'
import './Main.css';
import { Link } from 'react-router-dom';
import MenuBar from './MenuBar';

const Main = () => {
    return (
        <div className="main_content">
            <Link to="/askQuestion">
                <button type="button" class="btn btn-secondary btn-lg">Ask Question</button>
            </Link>
            <h1>Q&A Discussions</h1>
            <MenuBar></MenuBar>
            <MainComponent />
            <MainComponent />
            <MainComponent />
        </div>
    )
}

export default Main
