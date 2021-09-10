import React from 'react'
import PropTypes from 'prop-types'

const subreddit = ()=>{
    window.open("https://www.reddit.com/r/SamayRaina/");
}

const discord = ()=>{
    window.open("https://discord.gg/maisamayhoon");
}

const merch = ()=>{
    window.open("https://www.redwolf.in/samay-raina");
}

const patreon = ()=>{
    window.open("https://www.patreon.com/samayraina?fan_landing=true");
}

const membership = ()=>{
    window.open("https://www.youtube.com/c/SamayRainaOfficial/join");
}

export default function Navbar(props) {
    return (
        

        <div>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark" id="account">
            <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img className="rounded" src="https://lh3.google.com/u/0/d/15ezH__m6raHs_jjTsqL3mPKGYiSwZtJ1=w1920-h932-iv1" alt="" width="45" height="39" />
            </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={subreddit} href="##">Join Subreddit</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" onClick={discord} href="##">Join Discord</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active " aria-current="page" onClick={merch} href="##">Merch</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Paid Subscriptions
                        </a>
                        <ul className="dropdown-menu active" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" onClick={patreon} href="##">Patreon</a></li>
                            <li><a className="dropdown-item" onClick={membership} href="##">Youtube Membership</a></li>
                        </ul>
                    </li>
                </ul>
            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" onClick={props.togglemode} id="flexSwitchCheckDefault" />
                <label className="form-check-label text-white" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            </div>
        </div>
    </nav>
        </div>
    )
}



Navbar.prototype = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set  Title"
}
