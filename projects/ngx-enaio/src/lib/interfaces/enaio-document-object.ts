export interface EnaioDocumentObject {
  osid: number;
  objectTypeId: number;
  objectType: string;
  internalName: string;
  displayName: string;
  objectFlagsValue?: number;
  ecmSimpleFields: EnaioDocumentObjectField[];
  ecmTableFields: EnaioDocumentObjectTable[];
  baseParameters: EnaioDocumentObjectTypeValue[];
  rights: EnaioDocumentObjectRights;
  parentCabinetKeyType: string;
  parentCabinetKey: string;
  childrenCount: number;
  children: EnaioDocumentObject[];
  objectInserts: {};
  folderRegisterTree: [];
  systemFields: EnaioDocumentObjectTypeValue[];
  fileProperties?: EnaioDocumentObjectTypeValue[];
  variantInformation: EnaioDocumentObjectTypeValue[];
  variantTree: EnaioDocumentObjectVariant;
}

export interface EnaioDocumentObjectField {
  value: string;
  displayName: string;
  internalName: string;
  dbName: string;
  visible: boolean;
  type: string;
}

export interface EnaioDocumentObjectRights {
  objExport: boolean;
  objModify: boolean;
  objDelete: boolean;
  indexModify: boolean;
}

export interface EnaioDocumentObjectTable {
  displayName: string;
  internalName: string;
  dbName: string;
  visible: boolean;
  columns: EnaioDocumentObjectTableColumn[];
  value: EnaioDocumentObjectTableRow[];
}

export interface EnaioDocumentObjectTableColumn {
  internalName: string;
  type: string;
  displayName: string;
  dbName: string;
}

export interface EnaioDocumentObjectTableRow {
  ecmSimpleFields: EnaioDocumentObjectField[];
}

export interface EnaioDocumentObjectTypeValue {
  type: string;
  value: string;
}

export interface EnaioDocumentObjectVariant {
  children: EnaioDocumentObjectVariant[];
  variantInformation: EnaioDocumentObjectVariantInformation;
}

export interface EnaioDocumentObjectVariantInformation {
  DOCUMENT_ID: EnaioDocumentObjectTypeValue;
  DOCUMENT_PARENT_ID: EnaioDocumentObjectTypeValue;
  DOCUMENT_VERSION: EnaioDocumentObjectTypeValue;
  IS_ACTIVE: EnaioDocumentObjectTypeValue;
}

