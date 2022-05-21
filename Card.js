import React from "react";


export default function({img, title}){
    return(
        <div className="book">
            <img src={img} className="book-image"></img>
            <h3>{title}</h3>
        </div>
    )
}
