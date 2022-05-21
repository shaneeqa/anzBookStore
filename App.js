import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./components/Data"
import Review from "./components/Review"
import ReviewData from "./components/ReviewData"

export default function  App(){
    

    const books = Data.map(book => {
        return(
            <Card
            key={book.id}
            img = {book.img}
            title = {book.title}
        />
        )
    })

    const reviews = AnzReviewData.map(review =>{
        return(
            <Review 
            key = {review.id}
            title = {review.title}
            notes = {review.notes}
            />
        )
    })

    return(
        
        <div>
            <Navbar />
            <div className="body-container">
                <div className="bookPane">
                    {books}
                </div>
                <div className="reviewPane">                
                    {reviews}
                </div>
            </div>
        </div>
    )
        
}
