import { useContext, ReactNode } from 'react';
import { Theme } from "@mui/material";
import { map } from 'lodash';
import { styled } from '@mui/material/styles';

import Pad from './components/Pad';
import { State } from '../../context/GameStateProvider/state/types';
import { GameStateContext } from '../../context/GameStateProvider';
import { POD_ROWS, POD_COLUMNS, POD_SIZE } from '../../constants';


const GameFiledStyled = styled('main')((
    { cols, rows, theme } : { cols: number, rows: number, theme?: Theme, children: ReactNode[] }
) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${cols}, ${POD_SIZE}px)`,
    gridTemplateRows: `repeat(${rows}, ${POD_SIZE}px)`,
    gap: theme?.spacing(1),
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: theme?.spacing(2),
}));


const GameFiled = () => {
    const state = useContext<State | null>(GameStateContext);
    
    return (
        <GameFiledStyled cols={POD_COLUMNS} rows={POD_ROWS}>
            {map(state?.pods, (pad, id) => <Pad key={id} id={id} type={pad.type} />)}
        </GameFiledStyled>
    );
};

export default GameFiled;
