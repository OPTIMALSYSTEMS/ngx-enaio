import { EnaioDmsObject } from './enaio-dms-object';

/**
 * Enaio DMS Result
 */
export interface EnaioDmsResult {
  numItems: number;
  totalNumItems: number;
  hasMoreItems: boolean;
  objects: [EnaioDmsObject];
}


