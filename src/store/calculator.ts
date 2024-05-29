import { createStore, createEvent } from 'effector';

export const addDigit = createEvent<string>();
export const addOperator = createEvent<string>();
export const calculate = createEvent();
export const clear = createEvent();

const initialDisplay = '';
const initialHistory: string[] = [];

export const $display = createStore(initialDisplay)
    .on(addDigit, (state, digit) => state + digit)
    .on(addOperator, (state, operator) => state + ' ' + operator + ' ')
    .reset(clear);

export const $history = createStore(initialHistory)
    .on(calculate, state => [...state, $display.getState()])
    .reset(clear);

$display.on(calculate, state => {
    try {
        const result = eval(state);
        return result.toString();
    } catch {
        return 'Error';
    }
});
