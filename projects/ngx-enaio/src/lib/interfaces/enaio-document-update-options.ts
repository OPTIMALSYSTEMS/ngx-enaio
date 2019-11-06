import { EnaioFieldSchema } from './../enums/enaio-field-schema.enum';
import { EnaioLocale } from './../enums/enaio-locale.enum';

/**
 * Update Options
 */
export interface EnaioDocumentUpdateOptions {
  archivable?: boolean;
  replacefiles?: boolean;
  objecttypeid?: number;
}
