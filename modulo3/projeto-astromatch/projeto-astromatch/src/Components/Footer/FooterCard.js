import React from "react";

export default function FooterCard(props) {
    return (
        <div>
            {
                props.profile ?
                    <button >x</button> :
                    <button onClick={props.onClickPass}>x</button>
            }
            {
                props.profile ?
                    <button>ok</button> :
                    <button onClick={props.onClickToMatch}>ok</button>
            }
        </div>
    )
}