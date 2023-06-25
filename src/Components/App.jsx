import React, {useState} from "react";
import Nav from "./Nav";
import Card from "./Card";
import Footer from "./Footer";

import getCurrentDate from "../dateModule";
import greetMessage from "../greeting";

let greet;
let currentHour;
let currentDDMYT = getCurrentDate();
let greetMsg = greetMessage();

//console.log(getCurrentDate());


//Refresh after 0.5 minute / 30000 ms
setInterval(function(){
    window.location.reload();
}, 30000);


//Function to set greet message based on current time
function greetMessageFun(currHour){
    let gr = "";

    if (currHour > 16 || currHour < 5){
        gr = "evening";
    } else if (currHour < 12){    // or (currHour >=5 && currHour < 12)
        gr = "morning";
    } else if (currHour >= 12){
        gr = "afternoon";
    }

    return gr;
}


function App(){

    const [lang, setLang] = useState("english");
    const [dDmYt, setDdMyT] = useState(currentDDMYT);

    //console.log(dDmYt);
    
    currentHour = Number(dDmYt.time.hh);


    //Set language
    function langSelectCallBack(langSelected){
        setLang(langSelected);
    }

    //Function to update dDmYt
    function updateDdmyt(){
        let updatedDDMYT = getCurrentDate;
        //console.log(updatedDDMYT);
        setDdMyT(updatedDDMYT);
    }

    //Run "updateDdmyt" function every 1sec
    setInterval(updateDdmyt, 1000);


    //Set greet message according to current time
    greet = greetMessageFun(currentHour);
   


    return (
        <div className="container">
            <Nav handleCallBack = {langSelectCallBack} initialLang= {lang}/>
            <div className="card-container center-div-flex">
                <Card language= {lang} ddmyt= {dDmYt} greetObj= {greetMsg[greet]}/>
            </div>
            <Footer year= {dDmYt.year}/>
        </div>
        
        )
}

export default App;