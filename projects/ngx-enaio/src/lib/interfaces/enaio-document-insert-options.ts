import { EnaioFieldSchema } from './../enums/enaio-field-schema.enum';
import { EnaioLocale } from './../enums/enaio-locale.enum';

/**
 * Insert Options
 */
export interface EnaioDocumentInsertOptions {
  objecttypeid?: number;
  setvariantactive?: boolean;
  archivable?: boolean;
  islink?: boolean;
  inwftray?: boolean;
  inusertray?: boolean;
}
