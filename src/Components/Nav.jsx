import {react, useState} from "react";




function Nav(props){

    let lang = props.initialLang;

    function handleLanguageSelected(e){
        
        lang = e.target.value;
        props.handleCallBack(lang);
    }

    //console.log(langSelected);

    return (
        <select onChange={handleLanguageSelected}>
            <option value="english">en</option>
            <option value="german">de</option>
        </select>
    )
}

export default Nav;