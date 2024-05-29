import React from 'react';
import styled from 'styled-components';

const HistoryContainer = styled.div`
    background-color: white;
    padding: 10px;
    border: 1px solid lightgray;
    width: 200px;
    overflow-y: scroll;
    margin-top: 20px;
    margin-bottom: 10px;
`;

const HistoryItem = styled.div`
    padding: 5px 0;
    border-bottom: 1px solid lightgray;
`;

type HistoryProps = {
    history: string[];
};

export const CalculateHistory = ({history}: HistoryProps) => (
    <HistoryContainer>
        {history.map((item, index) => (
            <HistoryItem key={index}>{item}</HistoryItem>
        ))}
    </HistoryContainer>
);
