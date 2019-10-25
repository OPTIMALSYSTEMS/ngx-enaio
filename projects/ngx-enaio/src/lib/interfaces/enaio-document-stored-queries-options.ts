import { EnaioFieldSchema } from './../enums/enaio-field-schema.enum';
import { EnaioLocale } from './../enums/enaio-locale.enum';

/**
 * Stored Query Options
 */
export interface EnaioDocumentStoredQueriesOptions {
  /**  File name of an alternative metadata mapping */
  metadata?: string;
  /** Maximum number of hits for the call */
  pagesize?: number;
  /** Hit offset for scrolling through the hits */
  offset?: number;
  /** requested page for scrolling through the hits */
  page?: number;
  /**
   * Autostar behavior. Values resemble the Server API values:
   * "0" = no autostart
   * "1" = *request parameter
   * "2" = request parameter*
   * "3" = *request parameter*
   * If no value is specified,
   * the value is taken from the user's client
   * configuration.
   */
  autostar?: string;
  /** An extended generic metadata model is output. */
  verbose?: boolean;
}
