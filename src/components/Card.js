import React from "react";
import Star from "../assets/star.png"


function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="conatiner-card">
            <div className="card">
                <div className="row">

                    <div className="col-12">
                        {badgeText && <div className="card-badge">{badgeText}</div>}
                        <img src={props.item.coverImg} alt="zaferes" className="card-images img-fluid" />
                        <div className="card-stats">
                            <img src={Star} alt="" className="card-star img-fluid" />
                            <span>{props.rating}</span>
                            <span> ({props.item.stats.reviewCount})</span>
                            <span> {props.item.location}</span>
                        </div>
                        <p> {props.item.title} </p>
                        <p> <span className="bold">From ${props.item.price}</span> / person</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;