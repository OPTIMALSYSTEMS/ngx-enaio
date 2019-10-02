import { EnaioLocale } from './../enums/enaio-locale.enum';
export interface EnaioDocumentSearchOptions {
    objecttypeid?: number;
    refresh?: boolean;
    locale?: EnaioLocale;
    lockinfo?: boolean;
    timestamps?: boolean;
    fillLeadingZeros?: boolean;
}
