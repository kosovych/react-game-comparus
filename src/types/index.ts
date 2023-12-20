export enum PodTypes {
    default = 'default',
    pending = 'pending',
    human = 'human',
    computer = 'computer',
}

export interface Pod {
    id: string,
    type: PodTypes,
}