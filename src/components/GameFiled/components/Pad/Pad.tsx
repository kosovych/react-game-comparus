import React, { useContext } from 'react';

import { Paper, Button, ButtonIndicator } from './styled';
import { PodTypes } from '../../../../types';
import { State } from '../../../../context/GameStateProvider/state/types';
import { GameDispatchContext, GameStateContext } from '../../../../context/GameStateProvider';
import { ACTION_ENUM } from '../../../../context/GameStateProvider/state';

const Pad: React.FC<{id: string, type: PodTypes}> = ({ id, type }) => {
    const dispatch = useContext(GameDispatchContext);
    const state = useContext<State | null>(GameStateContext);

    const dispatchActions = (to: PodTypes.human | PodTypes.computer) => {
        dispatch({type: ACTION_ENUM.ADD_POINT, to, id});
        dispatch({type: ACTION_ENUM.NEXT_TICK});
    };

    const onAnimationEnd = () => dispatchActions(PodTypes.computer);

    const onClick = () => dispatchActions(PodTypes.human);

    return (
        <Paper elevation={2} type={type} id={id}>
            {type === 'pending' ? (
                <Button type='button' onClick={onClick}>
                    <ButtonIndicator
                        onAnimationEnd={onAnimationEnd}
                        timeToReact={state?.timeToReact}
                    />
                </Button>
            ) : null}
        </Paper>
    );
};

export default Pad;

