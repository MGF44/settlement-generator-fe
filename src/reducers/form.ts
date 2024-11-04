import { IClimate, ISubClimate } from "../types/climate";
import ILandform from "../types/landform";


interface FormState {
  name: string;
  climates: IClimate[];
  landforms: ILandform[];
  archetypes: string[];
  sizes: string[];
  incrementors: string[];
  mLevels: string[];
  formData: {
    climate?: ISubClimate;
    landform?: ILandform;
    archetype?: string;
    size?: string;
    incrementor?: string;
    mLevel?: string;
  }
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
  if (action.type === 'sizes') {
    return { ...state, sizes: action.content as string[] }
  }
  if (action.type === 'incrementors') {
    return { ...state, incrementors: action.content as string[] }
  }
  if (action.type === 'mLevels') {
    return { ...state, mLevels: action.content as string[] }
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
  return state;
}

export default formReducer;

export type { FormState, FormAction }