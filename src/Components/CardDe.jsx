import React from "react";


function CardDe(props){
    return(
        <>
            <div className="time card-de center-div-flex flex-direction-column">
                <h1>{props.time.hh}</h1>
                <h1>{props.time.mm}</h1>
            </div>
            <div className="date-day-month card-de flex-direction-column">
                <div className="date"><h5>{props.date}</h5></div>
                <div className="day font-weight-400"><h5>{props.day}</h5></div>
                <div className="month font-weight-400"><h5>{props.month}</h5></div>
            </div>
            <div className="greet card-de center-div-flex">
                <div className="greet"><p><em>Hallo, Guten {props.msg}!</em></p></div>
            </div>
        </>
    )
}

export default CardDe;