import { EnaioLanguageStatus } from '../enums/enaio-language-status.enum';


/** Available Languages */
export interface EnaioLanguages {
  /** List of all available languages */
  language: EnaioLanguage[];
}

/** Enaio Language Info */
export interface EnaioLanguage {
  /** Language name */
  name: string;
  /** Language id */
  lang_id: string;
  /** Active status */
  active: EnaioLanguageStatus;
}