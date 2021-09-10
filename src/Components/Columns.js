import React from 'react'

const reaching = ()=> {
    window.open("https://www.youtube.com/c/SamayRainaOfficial/search?query=reaching")
}

const reddit = ()=> {
    window.open("https://www.youtube.com/c/SamayRainaOfficial/search?query=Reddit")
}

const wwe = ()=> {
    window.open("https://www.youtube.com/c/SamayRainaOfficial/search?query=WWE")
}

export default function Columns(props) {
    return (
        <div className="container marketing my-3">
            <div className="row">
            <div className={`col-lg-4 text-center text-${props.textmode}`}>
            <img className="bd-placeholder-img rounded-circle " src="https://i.ytimg.com/vi/2_JZhhEsP6M/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJApXO8ihAFTmnfjRjQhbe7BYskQ" width="200" height="180" alt="idk3" />

                <h2>Reaching 1800 Streams</h2>
                <p>And then reaching 1700 and again reaching 1800<br /><strong>Infinite Streams OP!!!</strong></p>
                <p><a className="btn btn-secondary" onClick={reaching} href="##">Watch The Streams &raquo;</a></p>
            </div>
            <div className={`col-lg-4 text-center text-${props.textmode}`}>
            <img className="bd-placeholder-img rounded-circle" src="https://i.ytimg.com/vi/634dIlXFUi4/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnY_W0Ablhg9qEDR0zSq9ZsUjJug" width="200" height="180" alt="idk3" />

                <h2>WWE</h2>
                <p>WWE with SHAMERFLEET AND CRYDER<br /><strong>Undertaker 619 Op!!!</strong></p>
                <p><a className="btn btn-secondary" onClick={wwe} href="##">Watch The Highlights and Streams &raquo;</a></p>
            </div>
            <div className={`col-lg-4 text-center text-${props.textmode}`}>
            <img className="bd-placeholder-img rounded-circle" src="https://i.ytimg.com/vi/7SHR2hIcHiY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBhefYS8L4_FxfyuW4-o4-WUKt1kQ" width="200" height="180" alt="idk3" />

                <h2>Reddit Review</h2>
                <p>Then taking do not laugh challenge and doing the<br /> <strong>Dare!!!</strong></p>
                <p><a className="btn btn-secondary" onClick={reddit} href="##">Watch The Videos &raquo;</a></p>
            </div>
            </div>
            <hr className="featurette-divider" />
        </div>
    )
}
