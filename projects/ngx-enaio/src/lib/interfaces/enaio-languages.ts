import { EnaioLanguageStatus } from '../enums/enaio-language-status.enum';


/** Available Languages */
export interface EnaioLanguages {
  /** Languages */
  languages: EnaioLanguage;
}

/** Enaio Language Info */
export interface EnaioLanguage {
  /** Array of all available languages */
  language: EnaioLanguageItem[];
}

/** Enaio Language Info */
export interface EnaioLanguageItem {
  /** Language name */
  name: string;
  /** Language id */
  lang_id: string;
  /** Active status */
  active: EnaioLanguageStatus;
}