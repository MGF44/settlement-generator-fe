import { IClimate, ISubClimate } from "../types/climate";
import ILandform from "../types/landform";
import SettlementOptions from "../types/settlement-options";
import ISpecies from "../types/species";

interface FormState {
  climates: IClimate[];
  landforms: ILandform[];
  species: ISpecies[];
  archetypes: string[];
  sizes: string[];
  incrementors: string[];
  mLevels: string[];
  formData: SettlementOptions
}

interface FormAction {
  type: string;
  content?: unknown;
}

const formReducer = (state: FormState, action: FormAction): FormState => {
  if (action.type === 'climates') {
    return { ...state, climates: action.content as IClimate[] }
  }
  if (action.type === 'landforms') {
    return { ...state, landforms: action.content as ILandform[] }
  }
  if (action.type === 'archetypes') {
    return { ...state, archetypes: action.content as string[] }
  }
  if (action.type === 'species') {
    return { ...state, species: action.content as ISpecies[] }
  }
  if (action.type === 'sizes') {
    return { ...state, sizes: action.content as string[] }
  }
  if (action.type === 'incrementors') {
    return { ...state, incrementors: action.content as string[] }
  }
  if (action.type === 'mLevels') {
    return { ...state, mLevels: action.content as string[] }
  }
  if (action.type === 'form.name') {
    return { ...state, formData: { ...state.formData, name: action.content as string } }
  }
  if (action.type === 'form.climates') {
    return { ...state, formData: { ...state.formData, climate: action.content as ISubClimate } }
  }
  if (action.type === 'form.landforms') {
    return { ...state, formData: { ...state.formData, landform: action.content as ILandform } }
  }
  if (action.type === 'form.archetypes') {
    return { ...state, formData: { ...state.formData, archetype: action.content as string } }
  }
  if (action.type === 'form.sizes') {
    return { ...state, formData: { ...state.formData, size: action.content as string } }
  }
  if (action.type === 'form.incrementors') {
    return { ...state, formData: { ...state.formData, incrementor: action.content as string } }
  }
  if (action.type === 'form.mLevels') {
    return { ...state, formData: { ...state.formData, mLevel: action.content as string } }
  }
  if (action.type === 'form.species') {
    const spe = action.content as ISpecies;
    const rmSpecies = (s: ISpecies) => state.formData.species.filter((v) => v.name !== s.name)
    const hasSpecies = (s: ISpecies) => !!(state.formData.species.filter((v) => v.name === s.name).length)
    return { ...state, formData: { ...state.formData, species: hasSpecies(spe) ? rmSpecies(spe) : [...state.formData.species, spe] } }

  }
  return state;
}

export default formReducer;

export type { FormState, FormAction }