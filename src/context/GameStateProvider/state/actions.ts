import { PodTypes } from '../../../types';

export enum ACTION_ENUM {
    START_NEW_GAME = 'START_NEW_GAME',
    START_GAME = 'START_GAME',
    ADD_POINT = 'ADD_POINT',
    NEXT_TICK = 'NEXT_TICK',
}


export type Action =
    { type: ACTION_ENUM } |
    { type: ACTION_ENUM; timeToReact: number } |
    { type: ACTION_ENUM; to: PodTypes.human | PodTypes.computer; id: string };
