import React from 'react';
import './MenuBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const MenuBar = () => {
    return (
        <div>
            <div class="form-inline mt-3 d-flex justify-content-center">
                  <div class="input-group col-md-4 mb-2">
                    <input type="text" class="form-control" id="search" placeholder=""/>
                  </div>
                    <button type="button" id="search-btn" class="btn btn-primary mb-2"><FontAwesomeIcon className="icon" icon={faSearch} /></button>
               </div>
            {/* <div class="questionActions">
                <a href="/Discuss/New/?query=" class="addQuestion materialButton primary elevated">New Question</a>
                <div class="searchQuestion">
                    <form action="/Discuss/Search" id="searchForm" method="post"><input data-val="true" data-val-required="The Ordering field is required." id="ordering" name="Ordering" type="hidden" value="Trending" /> <div class="ui-widget">
                        <input class="clearable" id="tagsInput" name="TagsSingleField" placeholder="Search..." type="text" value="" />
                        <span class="removeTags"></span>
                    </div>
                        <input type="submit" class="submitSearch" value="" />
                    </form> </div>
                </div> */}

                <div class="questionTabs">
                    <ul class="tabs">
                        <li class="tab active" data-id="Trending" data-value="Trending">
                            <a href="/Discuss?ordering=Trending&amp;query=">Trending</a>
                        </li>
                        <li class="tab " data-id="MostRecent" data-value="MostRecent">
                            <a href="/Discuss?ordering=MostRecent&amp;query=">Most Recent</a>
                        </li>
                        <li class="tab " data-id="Unanswered" data-value="Unanswered">
                            <a href="/Discuss?ordering=Unanswered&amp;query=">Unanswered</a>
                        </li>
                        <li class="tab " data-id="MyQuestions" data-value="MyQuestions">
                            <a href="/Discuss?ordering=MyQuestions&amp;query=">My Questions</a>
                        </li>
                        <li class="tab " data-id="MyAnswers" data-value="MyAnswers">
                            <a href="/Discuss?ordering=MyAnswers&amp;query=">My Answers</a>
                        </li>
                    </ul>
                    {/* <select data-val="true" data-val-required="The Ordering field is required." id="orderingSelect" name="Ordering"><option selected="selected" value="Trending">Trending</option>
                            <option value="MostRecent">Most Recent</option>
                            <option value="Unanswered">Unanswered</option>
                            <option value="MyQuestions">My Questions</option>
                            <option value="MyAnswers">My Answers</option>
                        </select> */}
                </div>

            </div>
            );
};

            export default MenuBar;