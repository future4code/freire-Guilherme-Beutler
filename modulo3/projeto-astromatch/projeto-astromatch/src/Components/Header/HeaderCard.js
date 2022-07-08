import React from "react";

export default function HeaderCard(props) {
    return (
        <div>
            <p>Logo</p>
            <button onClick={props.onClickRender}>Match</button>
        </div>
    )
}