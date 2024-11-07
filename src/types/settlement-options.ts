import { ISubClimate } from "./climate";
import ILandform from "./landform";
import ISpecies from "./species";

interface SettlementOptions {
  name: string;
  climate?: ISubClimate;
  landform?: ILandform;
  archetype?: string;
  species: ISpecies[]
  size?: string;
  incrementor?: string;
  mLevel?: string;
}

export default SettlementOptions;