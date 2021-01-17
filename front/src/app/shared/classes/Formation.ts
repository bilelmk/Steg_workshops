import { Formateur } from './Formateur';
import { Theme } from './Theme';

export class Formation {
  id : number ;
  nom : string ;
  duree : string;
  description : string ;
  formateur : Formateur;
  theme : Theme;
}
