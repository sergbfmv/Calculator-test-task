import {Button} from "../Button";
import {addOperator, calculate, clear} from "../../../store/calculator";
import React from "react";
import styled from "styled-components";

const SpecifiedBtn = styled.div`
    display: flex;
    gap: 10px;
`
export const SpecifiedBtnContainer = () => {
    return (
        <SpecifiedBtn>
            {
                ['+', '*'].map(operator => (
                    <Button key={operator} label={operator} onClick={() => addOperator(operator)} operator type='inc'/>
                ))
            }
            {
                ['-', '/'].map(operator => (
                    <Button key={operator} label={operator} onClick={() => addOperator(operator)} operator type='dec'/>
                ))
            }
            <Button label="C" onClick={clear}/>
            <Button label="=" onClick={calculate}/>
        </SpecifiedBtn>
    )
}