import { EnaioFieldSchema } from './../enums/enaio-field-schema.enum';
import { EnaioLocale } from './../enums/enaio-locale.enum';

/**
 * Search Options
 */
export interface EnaioDocumentSearchOptions {
    /**
     * Object Type ID of the object being searched for. 
     * The parameter is optional, but for performance reasons it is recommended to set the parameter if it is known.
     */
    objecttypeid?: number;
    /**
     * The cache is cleared and the result is requested again by the server.
     */
    refresh?: boolean;
    /**
     * Output language.
     */
    locale?: EnaioLocale;
    /**
     * Information about the user and the date and time when the object was locked. 
     * Alternative values are UNLOCKED, SELF, or EXTERNAL.
     */
    lockinfo?: boolean;
    /**
     * If true, the date, time, and date/time basic parameters are returned in the form of a Java timestamp (Milliseconds).
     */
    timestamps?: boolean;
    /**
     * Leading zeros are output according to the enaio editor settings for values.
     */
    fillLeadingZeros?: boolean;
    /**
     * Size of the result set. Paging can be performed with this.
     */
    pagesize?: number;
    /**
     * Detailed offset independent of the pagesize
     */
    offset?: number;
    /**
     * For paging, the page to display. Overwrites the offset parameter. Offset is calculated from page * pagesize.
     */
    page?: number;
    /**
     * Maximum number of hits to load. This can be more hits than specified in pagesize. This can be used to regulate the caching so that subsequent pages are delivered faster.
     */
    maxhits?: number;
    /**
     * The object rights for each object should also be displayed in the hit list.
     */
    rights?: boolean;
    /**
     * Determines in which mode the fields of the object are returned. Possible values: MIN, ALL and DEF
     */
    fieldsschema?: EnaioFieldSchema;
}
