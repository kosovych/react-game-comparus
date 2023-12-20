import { styled, keyframes } from '@mui/material/styles';
import MUIPaper from '@mui/material/Paper';
import { red, green, blue, yellow } from '@mui/material/colors';
import { PodTypes } from '../../../../types';
import { POD_SIZE } from '../../../../constants';

const COLORS_BY_TYPE = {
    [PodTypes.default]: blue[200],
    [PodTypes.pending]: yellow[200],
    [PodTypes.human]: green[200],
    [PodTypes.computer]: red[200]
};

export const Paper = styled(MUIPaper)(({ type } : {type: PodTypes}) => ({
    position: 'relative',
    width: POD_SIZE,
    height: POD_SIZE,
    background: COLORS_BY_TYPE[type],
}));

export const Button = styled('button')(() => ({
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
}));

const indicate = keyframes`
    from {
        height: 100%;
    }
    to {
        height: 0%;
    }
`;

export const ButtonIndicator = styled('span')(({ timeToReact } : { timeToReact? : number}) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '50%',
    background: yellow[600],
    willChange: 'height',
    animation: `${indicate} ${timeToReact}ms linear forwards`,
}));
