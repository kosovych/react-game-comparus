import { useCallback, useContext, useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

import { HeaderInner, Score } from './styled';
import { GameStateContext, GameDispatchContext } from '../../context/GameStateProvider';
import { ACTION_ENUM } from '../../context/GameStateProvider/state';
import { State } from '../../context/GameStateProvider/state/types';

const Header = () => {
    const state = useContext<State | null>(GameStateContext);
    const dispatch = useContext(GameDispatchContext);

    const [value, setValue] = useState(state?.timeToReact);
    const [error, setError] = useState(false);

    const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
        const value = +evt.target.value;
        setValue(value);

        if (!value && !error) {
            return setError(true);
        }

        return setError(false);
    }, [error]);

    const onClick = () => dispatch({ type: ACTION_ENUM.START_GAME, timeToReact: value });

    return (
        <HeaderInner>
            <Score elevation={1}>
                <Typography variant="h5">
                    Score:
                    🤖 {state?.score.computer} : {state?.score.human} 👨‍💻 
                </Typography>
            </Score>
            <TextField
                id="time-to-react"
                label="Time (ms)"
                type="number"
                variant="outlined"
                size="small"
                required
                onChange={onChange}
                error={error}
                value={value}
            />
            <Button
                onClick={onClick}
                variant="contained"
                disabled={Boolean(error)}
            >
                Start Game
            </Button>
        </HeaderInner>
    );
};

export default Header;

