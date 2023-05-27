import React from "react";

type ButtonPropsType = {
    nameButton: string
}
export const Button = (props:ButtonPropsType) => {
    return (
        <button>{props.nameButton}</button>
    )
}