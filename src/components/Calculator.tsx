import React from 'react';
import {useStore} from 'effector-react';
import {$display, $history} from '../store/calculator';

import styled from 'styled-components';
import {Display} from "./Display";
import {CalculateHistory} from "./CalculateHistory";
import {SpecifiedBtnContainer} from "./Buttons/SpecifiedBtn/SpecifiedBtn";
import {SimpleBtnContainer} from "./Buttons/SimpleBtn/SimpleBtn";

const CalculatorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    width: 100%;
    margin: 40px auto;
    border: 1px solid black;
    border-radius: 10px;
`;

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 200px;
    width: 100%;
    gap: 10px;
    margin-top: 20px;
`;

export const Calculator = () => {
    const display = useStore($display);
    const history = useStore($history);

    return (
        <CalculatorContainer>
            <Display value={display}/>
            <ButtonsContainer>
                <SpecifiedBtnContainer/>
                <SimpleBtnContainer />
            </ButtonsContainer>
            <CalculateHistory history={history}/>
        </CalculatorContainer>
    );
};







