import React from 'react'

const Channel = ()=> {
    window.open("https://www.youtube.com/c/SamayRainaOfficial/")
}

const playlist = ()=> {
    window.open("https://youtube.com/playlist?list=PLNhFXCAQy6R3_Ottf0HNwNXGASNHdmNI1")
}

const Vlogs = ()=> {
    window.open("https://youtube.com/playlist?list=PLRv_c3P0AbXn2qMMNd5fsbb3b44wWg_s7")
}

export default function Slider() {
    return (
        <>
        <div id="myCarousel" className="carousel slide my-5" data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="abcdefgh my-1" src="https://yt3.ggpht.com/asJizG2mEcK-PBfQdOqmelhJVN6jGCmimyFqe8wE6iDIJlsoZlOLQjtb1uNVn3G0YHVUk_HfGg=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj" alt="idk"></img>
                {/* <img className="my-1" src="/src/banner.jpg" alt="idk"></img> */}

                <div className="container">
                <div className="carousel-caption text-start mx-auto">
                    <h1>Samay Raina</h1>
                    <p className="b">A Youtuber who went from being a Stand-Up Comedian to a Chess Enthusiast.</p>
                    <p><a className="btn btn-lg btn-primary" onClick={Channel} href="/">Youtube Channel</a></p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="abcdefgh rounded mx-auto d-block img-fluid" src="https://lh3.google.com/u/0/d/1f4ZSdz_pB57_1Kqk1rlTMUR7Stcp-eXJ=w1920-h932-iv1" alt="idk1"/>
                {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}

                <div className="container">
                <div className="carousel-caption text-start text-white b">
                    <h1>Pokemon with Vivek</h1>
                    <p className="text-warning b">Pokemon Let's Go Pikachu</p>
                    <p><a className="btn btn-lg btn-primary" onClick={playlist} href="/">Follow the Streams</a></p>
                </div>
                </div>
            </div>
            <div className="carousel-item">
                <img className="abcdefgh rounded mx-auto d-block img-fluid" src="https://lh3.google.com/u/0/d/1IT5rbv45ds8KIvqYWl--EiQFCdfUGL-6=w1920-h860-iv1" alt="idk2"/>
                {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}

                <div className="container">
                <div className="carousel-caption text-start">
                    <h1>Vlogs!!</h1>
                    <p>Maybe when Mamaearth Sponsors</p>
                    <p><a className="btn btn-lg btn-primary" onClick={Vlogs} href="/">Follow the Vlogs</a></p>
                </div>
                </div>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
        </>
    )
}
