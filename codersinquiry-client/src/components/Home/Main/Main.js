import React from 'react'
import MainComponent from './MainComponent'
import './Main.css';
import { Link } from 'react-router-dom';

const Main = () => {
    return (
        <div className="main_content">
            <Link to="/askQuestion">
                <button type="button" class="btn btn-secondary btn-lg">Ask Question</button>
            </Link>
            <h1>Q&A Discussions</h1>
            <MainComponent />
            <MainComponent />
            <MainComponent />
        </div>
    )
}

export default Main
