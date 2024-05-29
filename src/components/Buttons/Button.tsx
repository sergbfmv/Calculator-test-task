import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<{ operator?: boolean; type?: 'inc' | 'dec' }>`
    background-color: ${({ operator, type }) => {
        if (operator && type === 'dec') {
            return 'blue';
        } else if (operator) {
            return 'orange';
        } else {
            return 'gray';
        }
    }};
    border: none;
    color: white;
    padding: 20px;
    font-size: 18px;
    cursor: pointer;
    &:active {
        background-color: darkgray;
    }
`;

type ButtonProps = {
    label: string;
    onClick: () => void;
    operator?: boolean;
    type?: 'inc' | 'dec'
};

export const Button = ({ label, onClick, operator = false, type }: ButtonProps) => (
    <StyledButton onClick={onClick} operator={operator} type={type}>
        {label}
    </StyledButton>
);

