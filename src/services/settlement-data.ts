import { IClimate } from "../types/climate";
import ILandform from "../types/landform";
import SettlementOptions from "../types/settlement-options";
import ISpecies from "../types/species";


interface SettlementDataStorage {
  climates: () => Promise<IClimate[]>;
  landforms: () => Promise<ILandform[]>;
  species: () => Promise<ISpecies[]>;
  archetypes: () => Promise<string[]>;
  citySize: () => Promise<string[]>;
  incrementors: () => Promise<string[]>;
  mLevels: () => Promise<string[]>;
  genSettlement: (body: SettlementOptions) => Promise<Response>;
}

const SettlementData = (): SettlementDataStorage => {
  const climates = async (): Promise<IClimate[]> => {
    return await (await fetch(`http://localhost:3000/default-data/climates`)).json()
  }

  const landforms = async (): Promise<ILandform[]> => {
    return await (await fetch(`http://localhost:3000/default-data/landforms`)).json()
  }
  const species = async (): Promise<ISpecies[]> => {
    return await (await fetch(`http://localhost:3000/default-data/species`)).json()
  }
  const archetypes = (): Promise<string[]> => {
    return new Promise((resolve) => resolve(["FISHING", "MINING", "TRADE", "FARMING", "RELIGIOUS", "MILITARY", "SHADY"]))
  }

  const citySize = (): Promise<string[]> => {
    return new Promise((resolve) => resolve(["SETTLEMENT", "VILLAGE", "TOWN", "CITY", "METROPOLIS"]))
  }

  const incrementors = (): Promise<string[]> => {
    return new Promise((resolve) => resolve(["SMALL", "REGULAR", "LARGE"]))
  }

  const mLevels = (): Promise<string[]> => {
    return new Promise((resolve) => resolve(["NO_MAGIC", "LOW_MAGIC", "COMMON_MAGIC", "HIGH_MAGIC"]))
  }

  const genSettlement = async (body: SettlementOptions) => {
    return await fetch('http://localhost:3000/genset', {
      method: 'POST',
      body: JSON.stringify(body)
    })

  }

  return {
    climates,
    landforms,
    species,
    archetypes,
    citySize,
    incrementors,
    mLevels,
    genSettlement
  }
}

export default SettlementData;

export type { SettlementDataStorage }
