import { EnaioFieldSchema } from './../enums/enaio-field-schema.enum';
import { EnaioChildSchema } from './../enums/enaio-client-schema.enum';
import { EnaioSortOrder } from './../enums/enaio-sort-order.enum';
export interface EnaioDocumentSearchRequest {
  cabinet?: string;
  name?: string;
  objectTypeId?: string;
  osid?: string;

  query?: EnaioDocumentSearchQuery;
  conditionGroups?: EnaioDocumentSearchQuery[];
  additionalQueries?: EnaioDocumentSearchQuery[];

  result_config?: EnaioDocumentSearchRequestResult;
}

export interface EnaioDocumentSearchQuery {
  objectTypeId: string;
  fields?: EnaioDocumentSearchRequestFields;
  baseparams?: EnaioDocumentSearchRequestBaseparams;
}

export interface EnaioDocumentSearchRequestFields {
  [key: string]: EnaioDocumentSearchRequestField;
}

export interface EnaioDocumentSearchRequestField {
  value?: string;
  null?: boolean;
  internalName?: string;
  type?: string;
  columns?: EnaioDocumentSearchRequestColumn[];
  rows?: [string[]];
}

export interface EnaioDocumentSearchRequestResult {
  fieldsschema?: EnaioDocumentSearchRequestSchema[];
  pagesize?: number;
  offset?: number;
  maxhits?: number;
  deny_empty?: boolean;
  normalize_values?: boolean;
  distinct?: boolean;
  fieldsschema_mode?: EnaioFieldSchema;
  childschema_mode?: EnaioChildSchema;
  childfieldsschema_mode?: EnaioFieldSchema;
  export_depth?: number;
  systemFields?: number;
  registerContext?: number;
  disableSearchGroups?: number;
  followDocLink?: number;
  garbageMode?: number;
  fileProperties?: number;
  rights?: number;
}

export interface EnaioDocumentSearchRequestSchema {
  internalName?: string;
  displayName?: string;
  objectTypeId?: string;
  dbName?: string;
  sort_order?: EnaioSortOrder;
  sort_pos?: number;
}

export interface EnaioDocumentSearchRequestBaseparams {
  Creator?: EnaioDocumentSearchRequestField;
  Created?: EnaioDocumentSearchRequestField;
  Modifier?: EnaioDocumentSearchRequestField;
  Modified?: EnaioDocumentSearchRequestField;
  Owner?: EnaioDocumentSearchRequestField;
  ArchiveState?: EnaioDocumentSearchRequestField;
  Archivist?: EnaioDocumentSearchRequestField;
  ArchiveDate?: EnaioDocumentSearchRequestField;
  Locked?: EnaioDocumentSearchRequestField;
  HasVariants?: EnaioDocumentSearchRequestField;
  Version?: EnaioDocumentSearchRequestField;
  RetentionDate?: EnaioDocumentSearchRequestField;
  RetentionPlannedDate?: EnaioDocumentSearchRequestField;
  Links?: EnaioDocumentSearchRequestField;
  Medium?: EnaioDocumentSearchRequestField;
  SystemID?: EnaioDocumentSearchRequestField;
  ForeignID?: EnaioDocumentSearchRequestField;
  DocumentPageCount?: EnaioDocumentSearchRequestField;
  Register?: EnaioDocumentSearchRequestField;
  MultiLocation?: EnaioDocumentSearchRequestField;
  Signed?: EnaioDocumentSearchRequestField;
  LoanedOut?: EnaioDocumentSearchRequestField;
}

export interface EnaioDocumentSearchRequestColumn {
  internalName: string;
  type: string;
}
