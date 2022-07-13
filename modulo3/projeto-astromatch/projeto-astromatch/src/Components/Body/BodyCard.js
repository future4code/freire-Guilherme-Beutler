import React from "react";

export default function BodyCard (props) {

    return (
        <div photo={props.photo}>
            <div>{props.bio}</div>
            {props.name && <div>{props.name}, {props.age}</div>}
        </div>
    )
}