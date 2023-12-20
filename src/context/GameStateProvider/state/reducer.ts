import { shuffle, filter } from 'lodash';

import { initState } from './utils';
import { ACTION_ENUM } from './actions';
import { State } from './types';
import { Pod, PodTypes } from '../../../types';
import { SCORE_TO_WIN } from '../../../constants';

const startGame = ({ timeToReact } : {timeToReact: number}): State => {
    const state = initState();
    const { pods } = state;
    const id = shuffle(Object.keys(pods))[0];
    const pod = pods[id];

    pod.type = PodTypes.pending;
    pods[id] = pod;

    return ({...state, pods, timeToReact });
};

const addPoint = (state: State, action: {id: string, to: PodTypes.human | PodTypes.computer}): State => {
    const { pods, score } = state;
    const { to, id } = action;
    pods[id].type = to;
    score[to] += 1;

    return ({...state, pods, score});
};

const doNextTick = (state: State): State => {
    const scoreToContinue = SCORE_TO_WIN - 1;
    if (state.score.computer > scoreToContinue || state.score.human > scoreToContinue) return {...state};
    const nextPodId =  shuffle(filter(state.pods, (pod: Pod) => (pod.type === PodTypes.default)))[0].id;
    state.pods[nextPodId].type = PodTypes.pending;

    return ({...state});
};

const startNewGame = (state: State): State =>
    startGame({ timeToReact: state.timeToReact});

const reducer = (state: State, action): State => {
    switch (action.type) {
        case ACTION_ENUM.START_GAME:
            return startGame({ timeToReact: action.timeToReact });

        case ACTION_ENUM.ADD_POINT:
            return addPoint(state, {id: action.id, to: action.to});

        case ACTION_ENUM.NEXT_TICK:
            return doNextTick(state);

        case ACTION_ENUM.START_NEW_GAME:
            return startNewGame(state);

        default:
            return state;
    }
};

export default reducer;