import React from "react"

export default function Die(props) {
    
    return (
        <div 
            className={props.isHeld && props.value === props.correctvalue ? 
            "dado-true" : 
            (props.isHeld && props.value !== props.correctvalue) ? 
            "dado-false" : 
            "dado-noSelected"} 
            onClick={props.handle}>
            <h3>{props.value}</h3>
        </div>
    )
}