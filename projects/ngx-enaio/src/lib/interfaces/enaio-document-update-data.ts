
/**
 * Update Data
 */
export interface EnaioDocumentUpdateData {
  osid: string;
  objectTypeId?: string;
  mainTypeId?: string;
  fields: {
    [key: string]: EnaioDocumentUpdateDataField;
  };
}

export interface EnaioDocumentUpdateDataField {
  value: string;
  internalName: string;
}
