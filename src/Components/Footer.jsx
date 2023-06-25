import React from "react";

function Footer(props){

    return (
        <div className="footer">
            <p>Copyright &copy; Sat-Sid 2023 - {props.year}</p>
        </div>
    )
}

export default Footer;