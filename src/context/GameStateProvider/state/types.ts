import { Pod, PodTypes } from '../../../types';

export type Score = {
    [PodTypes.human]: number,
    [PodTypes.computer]: number,
}

export type PodsCollection<T extends string> = {
    [key in T]: Pod
};

export type State = {
    score: Score,
    pods: PodsCollection<string>,
    timeToReact: number,
}