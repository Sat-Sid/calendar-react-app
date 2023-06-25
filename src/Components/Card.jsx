import React from "react";
import CardEn from "./CardEn";
import CardDe from "./CardDe";



function Card(props){


    //console.log(props);
    
    return(
        <div className="card">
            {
                (props.language === "english") 
                ? 
                <CardEn date= {props.ddmyt.date.twoDigitDate} 
                        day= {props.ddmyt.dayName.enShort} 
                        month= {props.ddmyt.monthName.enShort} 
                        year= {props.ddmyt.year} 
                        time= {props.ddmyt.time}  
                        msg= {props.greetObj.en} />
                : 
                <CardDe date= {props.ddmyt.date.dateDeFormat} 
                        day= {props.ddmyt.dayName.deLong} 
                        month= {props.ddmyt.monthName.deLong} 
                        time= {props.ddmyt.time}
                        msg= {props.greetObj.de} />
            
            }
            
            
        </div>
    )


}

export default Card;