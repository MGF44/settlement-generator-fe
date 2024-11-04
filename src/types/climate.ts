import Generic from "./generic";

interface IClimate {
    type: string;
    subTypes: ISubClimate[];
}

type ISubClimate = Generic

export type { IClimate, ISubClimate }