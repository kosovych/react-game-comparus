import { range, reduce } from 'lodash';
import { State, PodsCollection } from './types';
import { PodTypes } from '../../../types';
import { POD_ROWS, POD_COLUMNS, TIME_TO_REACT } from '../../../constants';

const createPod = (acc: PodsCollection<string>) => {
    const id: string = window.crypto.randomUUID();
    acc[id] = { type: PodTypes.default, id };
    return acc;
};

export const getInitPods = (rows: number, cols: number) => {
    return reduce(range(rows * cols), createPod, {});
};

export const initState = (timeToReact = TIME_TO_REACT): State => {
    return ({
        score: {
            human: 0,
            computer: 0,
        },
        pods: getInitPods(POD_ROWS, POD_COLUMNS),
        timeToReact,
    });
};