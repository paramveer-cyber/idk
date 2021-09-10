import React from 'react'

export default function Card(props) {
    return (
        <>
        <div className="container">
            <div className="row featurette">
        <div className={`col-md-7 text-${props.textmode}`}>
            <span className="align-middle">
                <h2 className="heading align-middle">Comedians on Board  <span className="text-muted">COB Season 5</span></h2>
                <p className="lead">A tournament where all comedians gather and try to spread chess among people</p>
            </span>
        </div>
        <div className="col-md-5">
            <img alt="idk4" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src="https://i.ytimg.com/vi/UQZ8QfUhZOQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD0Do73rI5CvDhyJem6zRpTDRxKsw"/>
        </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
        <div className={`col-md-7 order-md-2 text-${props.textmode}`}>
            <h2 className="featurette-heading">Chess Olympiad  <span className="text-muted">2021</span></h2>
            <p className="lead">An Olympiad in which we know and trust that India is going to rock it.</p>
        </div>
        <div className="col-md-5 order-md-1">
            <img src="https://i.ytimg.com/vi/n7QTakZ5NiY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRMbVtEy9YYHvfBh4Ivt6nIRImsw"  className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="idk7"/>
            {/* <svg xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> */}

        </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
        <div className={`col-md-7  text-${props.textmode}`}>
            <h2 className="featurette-heading">Chowkdi  <span className="text-muted">OP</span></h2>
            <p className="lead">A cool gang in which every person is funny in their own way.</p>
        </div>
        <div className="col-md-5">
            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" alt="idk5" src="https://i.ytimg.com/vi/n4oDuD_jFxM/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCBMKeWGEoWTDTPLtHwEMOgT9dINA" />

        </div>
        </div>

        <hr className="featurette-divider" />
        </div>
        </>
    )
}
