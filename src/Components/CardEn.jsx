import React from "react";



function CardEn(props){

    //console.log(props.time)

    return(
        <>
            <div className="date card-en center-div-flex">
                <h1>{props.date}</h1>
            </div>
            <div className="day-month-year card-en center-div-flex">
                <div className="day"><h5>{props.day}</h5></div>
                <div className="month"><h5>{props.month}</h5></div>
                <div className="year"><h5>{props.year}</h5></div>
            </div>
            <div className="time-greet card-en">
                <div className="time">
                    <div className="hh"><h2>{props.time.hh}</h2></div>
                    <div className="colon-symbol"><h2 className="blink">:</h2></div>
                    <div className="mm"><h2>{props.time.mm}</h2></div>
                    <div className="colon-symbol"><h2 className="blink">:</h2></div>
                    <div className="ss"><h2>{props.time.ss}</h2></div>
                </div>
                <div className="greet"><p><em>Hello, Good {props.msg}!</em></p></div>
            </div>
        </>
    )
}

export default CardEn;