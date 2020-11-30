import React from 'react'
import './Widgets.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widgets() {
    return (
        <div className = "widgets">
            <div className = "widgets__input">
                <SearchIcon 
                    className = "widgets__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            <div className = "widgets__widgetContainer">
                <h2>
                    Whats'happening
                </h2>
                <TwitterTweetEmbed tweetId = {"1321351808086798343"} />

                <TwitterTimelineEmbed 
                    sourceType = "profile"
                    screenName = "akky_im"
                    options = {{ height: 400 }}
                />

                <TwitterShareButton 
                    url = {"https://facebook.com/akkyProjects"}
                    options = { { text : "Subscribe my Youtube Channel #CodeWithAkky" , via :  "akkyProjects" }}
               />
            </div>
        </div>
    )
}

export default Widgets
