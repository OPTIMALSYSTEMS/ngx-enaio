import { EnaioFieldSchema } from './../enums/enaio-field-schema.enum';
import { EnaioLocale } from './../enums/enaio-locale.enum';

/**
 * Parents Options
 */
export interface EnaioDocumentParentsOptions {
  tree?: boolean;
  verbose?: boolean;
  objecttypeid?: number;
  metadata?: string;
}
