import React from "react";

export default function AnzReview({title, notes}){
    return(
        <div className="review">
            <h2>{title}</h2>
            <p>{notes}</p>
        </div>
    )
}
