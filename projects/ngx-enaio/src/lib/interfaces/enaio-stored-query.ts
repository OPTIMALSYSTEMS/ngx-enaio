/**
 * /osrest/api/documents/storedqueries result
 */
export interface EnaioStoredQueries {
  /**
   * List of stored queries and folders (if foldering = true)
   */
  storedqueries: EnaioStoredQuery[];
}
/**
 * stored query or desktop folder
 */
export interface EnaioStoredQuery {
  /**
   * Unique id of the stored query. This ID can change change on profile distribution and publishing on public desktop
   * id = -1 Is a special stored query for objects in the user tray
   * id = -2 IS a special stored query for last access documents of the current user
   */
  id: number;
  /**
   * Non-unique name of the stored query
   */
  name: string;
  /**
   * Defines if the stored query is on the user or public desktop
   */
  isGlobal: boolean;
  /**
   * Defines if the item is a stored query or a folder (only available on foldering = true)
   */
  isFolder: boolean;
  /**
   * TODO Unknown property
   */
  isIncomplete: boolean;
  /**
   * Associated profile for the stored query. Empty string if no link exists.
   */
  profile?: string;
  /**
   * IDs of the used object types in the stored query. Not available for folders
   */
  objectTypes?: number[];
  /**
   * Query parameters for stored queries with parameters. Attribute does not exists for folders.
   */
  queryParams?: EnaioStoredQueryParam[];
  /**
   * Stored queries in the folder. Attribute does not exists for stored queries.
   */
  storedqueries?: EnaioStoredQuery[];
}

/**
 * Stored query parameter
 */
export interface EnaioStoredQueryParam {
  /**
   * Language specific object type name
   */
  object: string;
  /**
   * object type internal name
   */
  internalNameObject: string;
  /**
   * Language specific field name
   */
  field: string;
  /**
   * field internal name
   */
  internalName: string;
  /**
   * variable name
   */
  varname: string;
  /**
   * field size
   */
  size: number;
  /**
   * query parameter position
   */
  position: number;
  /**
   * data type of the field
   */
  dataType: string;
  /**
   * List values for dataType = list
   */
  listData?: string[];
  /**
   * List elements for dataType = list with value and description (part behind pipe sign)
   */
  listDataVD?: {value: string, description: string};
}
