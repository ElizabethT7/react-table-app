import { ICharacteristics } from './ICharacteristics';

export interface ITrain {
  name: string;
  description: string;
  characteristics: ICharacteristics[];
}