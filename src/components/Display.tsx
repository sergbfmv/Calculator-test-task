import React from 'react';
import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    align-items: center;
    background-color: lightgray;
    padding: 20px;
    font-size: 32px;
    color: black;
    width: 300px;
    height: 50px;
    margin-top: 20px;
    border-radius: 10px;
    overflow-y: auto;
    font-family: 'Pocket Calculator';
`;

type DisplayProps = {
    value: string;
};

export const Display = ({value}: DisplayProps) => (
    <StyledDisplay>
        {value}
    </StyledDisplay>
);

