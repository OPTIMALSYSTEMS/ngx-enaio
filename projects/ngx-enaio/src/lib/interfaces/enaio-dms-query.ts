/**
 * Enaio DMS Query
 */
export interface EnaioDmsQuery {
  statement: string;
  skipCount?: number;
  maxItems?: number;
  handleDeletedDocuments?: EnaioDmsQueryHandleDeleted;
  includePermissions?: boolean;
  parameters?: { [key: string]: string };
}

export enum EnaioDmsQueryHandleDeleted {
  DELETED_DOCUMENTS_EXCLUDE,
  DELETED_DOCUMENTS_ONLY
}
