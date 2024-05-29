import {Button} from "../Button";
import {addDigit} from "../../../store/calculator";
import React from "react";

export const SimpleBtnContainer = () => {
    return (
        <>
            {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map(digit => (
                <Button key={digit} label={digit} onClick={() => addDigit(digit)} operator={false}/>
            ))}
        </>
    )
}