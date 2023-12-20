import React from 'react';

import { reducer } from './state';
import { initState } from './state/utils';
import { State } from './state/types';
import { Action } from './state/actions';

export const GameStateContext = React.createContext<State | null>(null);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const GameDispatchContext = React.createContext((_p: Action) => {});

const GameStateProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initState());

    return (
        <GameStateContext.Provider value={state}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>
    );
};

export default GameStateProvider;